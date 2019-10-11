import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required, Validators.pattern("^(?!.*[A-Za-z][A-Za-z][A-Za-z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@!%*?.])([A-Za-z][A-Za-z\\d$@!%*?.]{7,11})$")]),
    repeatPassword: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  change() {
    if(this.form.value['newPassword'] !== this.form.value['repeatPassword']) {
      alert('Passwords do not match!');
      return;
    }

    this.http.post(this.dataService.backendUrl + '/usersChangePassword', this.form.value).subscribe(
      data => {
        sessionStorage.removeItem("user");
        alert('Password successfully changed!');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      });
  }

}
