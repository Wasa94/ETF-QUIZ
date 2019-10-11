import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    jmbg: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.http.post(this.dataService.backendUrl + '/usersForgotPassword', this.form.value).subscribe(
      data => {
        sessionStorage.setItem("forgotPassword", JSON.stringify(data));
        this.router.navigate(['/forgotPasswordQuestion']);
      },
      error => {
        alert(error.error.message);
      });
  }

}
