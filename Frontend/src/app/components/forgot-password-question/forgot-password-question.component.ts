import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-question',
  templateUrl: './forgot-password-question.component.html',
  styleUrls: ['./forgot-password-question.component.css']
})
export class ForgotPasswordQuestionComponent implements OnInit {
  form = new FormGroup({
    answer: new FormControl('', Validators.required)
  });

  question = "";
  answer = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.question = JSON.parse(sessionStorage.getItem('forgotPassword'))['securityQuestion'];
    this.answer = JSON.parse(sessionStorage.getItem('forgotPassword'))['answer'];
  }

  submit() {
    if(this.answer !== this.form.value['answer']) {
      alert('Wrong answer!');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/forgotPasswordNew']);
    }
  }

}
