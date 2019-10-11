import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-number',
  templateUrl: './my-number.component.html',
  styleUrls: ['./my-number.component.css']
})
export class MyNumberComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  time = 60;
  score = 0;

  firstNumber = 1;
  secondNumber = 1;
  thirdNumber = 1;
  fourthNumber = 1;
  fifthNumber = 10;
  sixthNumber = 25;
  result = 0;

  first = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  second = [10, 15, 20];
  third = [25, 50, 75, 100];

  intervals = [];
  text = "Stop";

  constructor(private router: Router) { }

  ngOnInit() {
    this.score = +sessionStorage.getItem('score');

    this.intervals.push(setInterval(() => {
      this.firstNumber = this.first[Math.floor(Math.random() * this.first.length)];
    }, 100));

    this.intervals.push(setInterval(() => {
      this.secondNumber = this.first[Math.floor(Math.random() * this.first.length)];
    }, 100));

    this.intervals.push(setInterval(() => {
      this.thirdNumber = this.first[Math.floor(Math.random() * this.first.length)];
    }, 100));

    this.intervals.push(setInterval(() => {
      this.fourthNumber = this.first[Math.floor(Math.random() * this.first.length)];
    }, 100));

    this.intervals.push(setInterval(() => {
      this.fifthNumber = this.second[Math.floor(Math.random() * this.second.length)];
    }, 100));

    this.intervals.push(setInterval(() => {
      this.sixthNumber = this.third[Math.floor(Math.random() * this.third.length)];
    }, 100));

    this.intervals.push(setInterval(() => {
      this.result = Math.floor(Math.random() * 1000);
    }, 100));
  }

  stop() {
    this.intervals.forEach(interval => {
      clearInterval(interval);
    });

    this.text = "Submit";
    setTimeout(() => {
      this.allNumbers.push(this.firstNumber);
      this.allNumbers.push(this.secondNumber);
      this.allNumbers.push(this.thirdNumber);
      this.allNumbers.push(this.fourthNumber);
      this.allNumbers.push(this.fifthNumber);
      this.allNumbers.push(this.sixthNumber);
      this.allNumbers = this.allNumbers.sort(function (a, b) { return a - b });
    }, 1000);

    this.initTimer();
  }

  allNumbers: number[] = [];
  answer = "";

  submit() {
    if (!this.answer) return;
    try {
      const val = eval(this.answer);
      var numbers = this.answer.match(/\d+/g).map(Number);
      numbers = numbers.sort(function (a, b) { return a - b });
      if (this.checkDifference(this.allNumbers, numbers) && val === this.result) {
        alert("Correct!");
        this.score = this.score + 5;
      } else {
        alert("Wrong! Your answer is: " + val);
      }
      sessionStorage.setItem('score', this.score.toString());
      this.router.navigate(['/5x5']);
    } catch{
      return;
    }
  }

  click() {
    if (this.text === "Stop") {
      this.stop();
    }
    else {
      this.submit();
    }
  }

  allowedCharacters(event): boolean {
    const charCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '(', ')'];
    if (charCodes.indexOf(event.key) === -1) return false;
    else return true;
  }

  checkDifference(first: number[], second: number[]): boolean {
    const diff = this.getDifference([...first], [...second]);
    return second.toString() === diff.toString();
  }

  getDifference(a: number[], b: number[]) {
    let result = [];
    while (a.length > 0 && b.length > 0) {
      if (a[0] < b[0]) { a.shift(); }
      else if (a[0] > b[0]) { b.shift(); }
      else {
        result.push(a.shift());
        b.shift();
      }
    }

    return result;
  }

  timer;
  initTimer() {
    this.timer = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(this.timer);
        sessionStorage.setItem('score', this.score.toString());
        setTimeout(() => {
          alert('TIME IS UP!');
          this.router.navigate(['/5x5']);
        }, 500);
      }
    }, 1000);
  }
}
