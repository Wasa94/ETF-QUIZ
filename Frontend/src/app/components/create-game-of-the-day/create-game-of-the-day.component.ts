import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Anagram } from 'src/app/models/anagram';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { FiveByFive } from 'src/app/models/fiveByFive';
import { Chalice } from 'src/app/models/chalice';
import { GameOfTheDay } from 'src/app/models/gameOfTheDay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game-of-the-day',
  templateUrl: './create-game-of-the-day.component.html',
  styleUrls: ['./create-game-of-the-day.component.css']
})
export class CreateGameOfTheDayComponent implements OnInit {
  minDate = new Date();
  displayedColumnsAnagrams: string[] = ['problem', 'solution'];
  dataSourceAnagrams: MatTableDataSource<Anagram> = new MatTableDataSource<Anagram>([]);

  displayedColumns5x5: string[] = ['first', 'second', 'third', 'fourth', 'fifth'];
  dataSource5x5: MatTableDataSource<FiveByFive> = new MatTableDataSource<FiveByFive>([]);

  displayedColumnsChalices: string[] = ['answer_9_1', 'answer_8_1', 'answer_7_1', 'answer_6_1', 'answer_5_1', 'answer_4_1', 'answer_3'];
  dataSourceChalices: MatTableDataSource<Chalice> = new MatTableDataSource<Chalice>([]);

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  createdDates: number[] = [];

  ngOnInit() {
    this.http.get<Anagram[]>(this.dataService.backendUrl + '/anagrams').subscribe(
      data => {
        this.dataSourceAnagrams = new MatTableDataSource<Anagram>(data);
        this.dataSourceAnagrams.paginator = this.paginator.toArray()[0];
      },
      error => {

      }
    );

    this.http.get<FiveByFive[]>(this.dataService.backendUrl + '/5x5').subscribe(
      data => {
        this.dataSource5x5 = new MatTableDataSource<FiveByFive>(data);
        this.dataSource5x5.paginator = this.paginator.toArray()[1];
      },
      error => {

      }
    );

    this.http.get<Chalice[]>(this.dataService.backendUrl + '/chalices').subscribe(
      data => {
        this.dataSourceChalices = new MatTableDataSource<Chalice>(data);
        this.dataSourceChalices.paginator = this.paginator.toArray()[2];
      },
      error => {

      }
    )
    
    this.http.get<GameOfTheDay[]>(this.dataService.backendUrl + '/gamesoftheday').subscribe(
      data => {
        this.createdDates = data.map(x => x.date);
      },
      error => {
        alert(error.error.message);
      });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getTime();
    return this.createdDates.indexOf(day) === -1
  }

  selectedRowAnagrams;

  selectRowAnagrams(row) {
    this.selectedRowAnagrams = row;
  }
  selectedRow5x5;

  selectRow5x5(row) {
    this.selectedRow5x5 = row;
  }

  selectedRowChalices;

  selectRowChalices(row) {
    this.selectedRowChalices = row;
  }

  selectedDate: Date;

  create() {
    const gameOfTheDay = new GameOfTheDay();
    gameOfTheDay.date = this.selectedDate.getTime();
    gameOfTheDay.chalice = this.selectedRowChalices['_id'];
    gameOfTheDay.fiveByFive = this.selectedRow5x5['_id'];
    gameOfTheDay.anagram = this.selectedRowAnagrams['_id'];

    this.http.put(this.dataService.backendUrl + '/gamesoftheday', gameOfTheDay).subscribe(
      data => {
        alert('Game created!');
        this.router.navigate(['/administrator']);
      },
      error => {
        alert(error.error.message);
      });
  }

}
