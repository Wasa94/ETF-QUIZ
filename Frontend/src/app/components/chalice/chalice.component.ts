import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chalice } from 'src/app/models/chalice';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chalice',
  templateUrl: './chalice.component.html',
  styleUrls: ['./chalice.component.css']
})
export class ChaliceComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  
  public form: FormGroup = new FormGroup({
    answer: new FormControl('', Validators.required)
  });

  chalice: Chalice = null;
  time = 30;
  score = 0;

  solution = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];

  questions: string[] = [];
  answers: string[][] = [];

  question = "";
  answer = "";

  next = 0;

  constructor(private router: Router, private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    this.chalice = JSON.parse(sessionStorage.getItem('chalice'));
    this.score = +sessionStorage.getItem('score');

    this.questions.push(this.chalice.question_9_1);
    this.questions.push(this.chalice.question_8_1);
    this.questions.push(this.chalice.question_7_1);
    this.questions.push(this.chalice.question_6_1);
    this.questions.push(this.chalice.question_5_1);
    this.questions.push(this.chalice.question_4_1);
    this.questions.push(this.chalice.question_3);
    this.questions.push(this.chalice.question_4_2);
    this.questions.push(this.chalice.question_5_2);
    this.questions.push(this.chalice.question_6_2);
    this.questions.push(this.chalice.question_7_2);
    this.questions.push(this.chalice.question_8_2);
    this.questions.push(this.chalice.question_9_2);

    this.answers.push(this.replaceAll(this.chalice.answer_9_1).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_8_1).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_7_1).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_6_1).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_5_1).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_4_1).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_3).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_4_2).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_5_2).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_6_2).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_7_2).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_8_2).split(''));
    this.answers.push(this.replaceAll(this.chalice.answer_9_2).split(''));

    this.answer = this.inverseReplace(this.answers[this.next].join(''));
    this.question = this.questions[this.next];

    this.initTimer();
  }

  submit() {
    if (this.answer.toUpperCase() === this.form.value['answer'].toUpperCase()) {
      this.score = this.score + 2;
    }

    for (let i = 0; i < this.solution[this.next].length; i++) {
      this.solution[this.next][i] = this.inverseReplace(this.answers[this.next][i]);
    }

    this.next++;
    if (this.next >= 13) {
      setTimeout(() => {
        this.saveScore();
        alert('Your final score: ' + this.score);
        this.router.navigate(['/player']);
      }, 500);
      clearInterval(this.timer);
    } else {
      this.answer = this.inverseReplace(this.answers[this.next].join(''));
      this.question = this.questions[this.next];

      this.form.reset();
      this.time = 30;
    }
  }

  inverseReplace(word: string): string {
    if (!word)
      return "";
    let x = this.replace(word, /x/g, 'nj');
    x = this.replace(x, /w/g, 'lj');
    x = this.replace(x, /q/g, 'dž');

    return x.toUpperCase();
  }

  replaceAll(word: string): string {
    if (!word)
      return "";
    let x = this.replace(word, /nj/g, 'x');
    x = this.replace(x, /dj/g, 'đ');
    x = this.replace(x, /lj/g, 'w');
    x = this.replace(x, /dž/g, 'q');

    return x.toUpperCase();
  }

  replace(word: string, regexp: RegExp, replace: string) {
    return word.toLowerCase().replace(regexp, replace);
  }

  timer;
  initTimer() {
    this.timer = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        for (let i = 0; i < this.solution[this.next].length; i++) {
          this.solution[this.next][i] = this.inverseReplace(this.answers[this.next][i]);
        }

        this.next++;
        if (this.next >= 13) {
          setTimeout(() => {
            this.saveScore();
            alert('TIME IS UP!');
            alert('Your final score: ' + this.score);
            this.router.navigate(['/player']);
          }, 500);
          clearInterval(this.timer);
        } else {
          this.answer = this.inverseReplace(this.answers[this.next].join(''));
          this.question = this.questions[this.next];

          this.form.reset();
          this.time = 30;
        }
      }
    }, 1000);
  }

  saveScore() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const body = { date: new Date().setHours(0, 0, 0, 0), username: user['username'], result: this.score };
    this.http.put(this.dataService.backendUrl + '/results', body).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
