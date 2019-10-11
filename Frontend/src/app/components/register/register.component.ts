import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  types: any = ['Player', 'Supervisor', 'Administrator'];
  genders: any = ['M', 'F'];

  selectedType = 'Player';
  selectedGender = 'M';

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern("^(?!.*[A-Za-z][A-Za-z][A-Za-z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@!%*?.])([A-Za-z][A-Za-z\\d$@!%*?.]{7,11})$")]),
    repeatPassword: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    jmbg: new FormControl('', [Validators.required, Validators.pattern("^\\d{13}$")]),
    securityQuestion: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.value['password'] !== this.registerForm.value['repeatPassword']) {
      alert('Passwords do not match!');
      return;
    }
    this.http.put(this.dataService.backendUrl + '/users', this.registerForm.value).subscribe(
      data => {
        if (data['status']) {
          alert('You successfully registered! Please wait to your account to be activated by administrator.');
          this.router.navigate(['/login']);
        }
      },
      error => {
        alert(error.error.message);
      });
  }

}
