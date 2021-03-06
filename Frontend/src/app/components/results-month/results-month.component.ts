import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from 'src/app/models/result';
import { MatTableDataSource } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results-month',
  templateUrl: './results-month.component.html',
  styleUrls: ['./results-month.component.css']
})
export class ResultsMonthComponent implements OnInit {
  displayedColumns: string[] = ['username', 'date', 'result'];
  dataSource: MatTableDataSource<Result> = new MatTableDataSource<Result>([]);

  constructor(private http: HttpClient, private dataService: DataService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.http.get<Result[]>(this.dataService.backendUrl + '/resultsMonth').subscribe(
      data => {
        data.forEach(result => {
          const tmp = new Date(result.date);
          result.date = this.datepipe.transform(tmp, 'dd-MM-yyyy');
        });

        this.dataSource = new MatTableDataSource<Result>(data);
      },
      error => {

      }
    );
  }

}
