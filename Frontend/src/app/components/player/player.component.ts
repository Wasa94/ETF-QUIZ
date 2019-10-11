import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { GameOfTheDay } from 'src/app/models/gameOfTheDay';
import { Anagram } from 'src/app/models/anagram';
import { FiveByFive } from 'src/app/models/fiveByFive';
import { Chalice } from 'src/app/models/chalice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  user: User;
  errorDetected = false;

  constructor(private dataService: DataService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    const date = new Date().setHours(0, 0, 0, 0);
    
    sessionStorage.setItem('score', "0");

    this.http.get<boolean>(this.dataService.backendUrl + '/gamesOfTheDayPlayed/' + this.user['username']).subscribe(
      data => {
        if(data) {
          this.errorDetected = true;
          alert('Game of the day already played!');
        }
      },
      error => {
        console.log(error)
      }
    );

    this.http.get<GameOfTheDay>(this.dataService.backendUrl + '/gamesOfTheDay/' + date).subscribe(
      data => {
        this.http.get<Anagram>(this.dataService.backendUrl + '/anagrams/' + data.anagram).subscribe(
          data => {
            sessionStorage.setItem('anagram', JSON.stringify(data));
          },
          error => {
            this.errorDetected = true;
            alert(error);
          });

        this.http.get<FiveByFive>(this.dataService.backendUrl + '/fiveByFives/' + data.fiveByFive).subscribe(
          data => {
            sessionStorage.setItem('fiveByFive', JSON.stringify(data));
          },
          error => {
            this.errorDetected = true;
            alert(error);
          });

        this.http.get<Chalice>(this.dataService.backendUrl + '/chalices/' + data.chalice).subscribe(
          data => {
            sessionStorage.setItem('chalice', JSON.stringify(data));
          },
          error => {
            this.errorDetected = true;
            alert(error);
          });
      },
      error => {
        this.errorDetected = true;
        alert('Game of the day for today is not created!');
      });
  }

  play() {
    this.router.navigate(['/anagram']);
  }

  results() {

  }

}
