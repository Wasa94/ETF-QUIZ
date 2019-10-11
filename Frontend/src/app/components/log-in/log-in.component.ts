import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.http.post<User>(this.dataService.backendUrl + '/users', this.loginForm.value).subscribe(
      data => {
        sessionStorage.setItem('user', JSON.stringify(data));

        if (data.type == 'Player') {
          this.router.navigate(['/player']);
        } else if (data.type == 'Administrator') {
          this.router.navigate(['/administrator']);
        } else if (data.type == 'Supervisor') {
          this.router.navigate(['/supervisor']);
        }
      },
      error => {
        alert(error.error.message);
      });
  }

}
