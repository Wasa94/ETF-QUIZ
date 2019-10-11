import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password-new',
  templateUrl: './forgot-password-new.component.html',
  styleUrls: ['./forgot-password-new.component.css']
})
export class ForgotPasswordNewComponent implements OnInit {
  form = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern("^(?!.*[A-Za-z][A-Za-z][A-Za-z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@!%*?.])([A-Za-z][A-Za-z\\d$@!%*?.]{7,11})$")]),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if(this.form.value['password'] !== this.form.value['confirmPassword']) {
      alert('Passwords do not match!');
      return;
    }

    const username = JSON.parse(sessionStorage.getItem('forgotPassword'))['username'];

    this.http.post(this.dataService.backendUrl + '/usersForgotPasswordNew', {password: this.form.value['password'], username: username }).subscribe(
      data => {
        if(data) {
          alert('Password successfully changed!');
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log(error);
      });
  }

}
