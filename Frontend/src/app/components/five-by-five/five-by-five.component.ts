import { Component, OnInit, OnDestroy } from '@angular/core';
import { FiveByFive } from 'src/app/models/fiveByFive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-five-by-five',
  templateUrl: './five-by-five.component.html',
  styleUrls: ['./five-by-five.component.css']
})
export class FiveByFiveComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  time = 60;
  score = 0;
  scoreWords = 0;
  solution = [[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']];
  fiveByFive: FiveByFive = null;
  selectedValue = 'A';

  letters = ['A', 'B', 'C', 'Č', 'Ć', 'D', 'Dž', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Lj', 'M', 'N', 'Nj',
    'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'];

  usedLetters = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.fiveByFive = JSON.parse(sessionStorage.getItem('fiveByFive'));
    this.score = +sessionStorage.getItem('score');
    this.initTimer();
  }

  getScore() {
    return this.score + this.scoreWords;
  }

  guess() {
    const first = this.replaceAll(this.fiveByFive.first);
    const second = this.replaceAll(this.fiveByFive.second);
    const third = this.replaceAll(this.fiveByFive.third);
    const fourth = this.replaceAll(this.fiveByFive.fourth);
    const fifth = this.replaceAll(this.fiveByFive.fifth);

    const selected = this.replaceAll(this.selectedValue);
    let hit = false;

    let n = this.getIndicesOf(selected, first, false);
    n.forEach(index => {
      this.solution[0][index] = this.selectedValue;
    });
    this.score = this.score + n.length;
    if (n.length > 0) {
      hit = true;
    }

    n = this.getIndicesOf(selected, second, false);
    n.forEach(index => {
      this.solution[1][index] = this.selectedValue;
    });
    this.score = this.score + n.length;
    if (n.length > 0) {
      hit = true;
    }

    n = this.getIndicesOf(selected, third, false);
    n.forEach(index => {
      this.solution[2][index] = this.selectedValue;
    });
    this.score = this.score + n.length;
    if (n.length > 0) {
      hit = true;
    }

    n = this.getIndicesOf(selected, fourth, false);
    n.forEach(index => {
      this.solution[3][index] = this.selectedValue;
    });
    this.score = this.score + n.length;
    if (n.length > 0) {
      hit = true;
    }

    n = this.getIndicesOf(selected, fifth, false);
    n.forEach(index => {
      this.solution[4][index] = this.selectedValue;
    });
    this.score = this.score + n.length;
    if (n.length > 0) {
      hit = true;
    }

    if (!hit)
      this.score = this.score - 2;

    for (var i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === this.selectedValue) {
        const deleted = this.letters.splice(i, 1);
        this.usedLetters = this.usedLetters + " " + deleted[0];
        this.selectedValue = this.letters[0];
        break;
      }
    }

    const words = this.checkFinish();
    this.scoreWords = words * 2;
    if (words === 10) {
      sessionStorage.setItem('score', this.getScore().toString());
      setTimeout(() => {
        alert("Your 5x5 score: " + this.getScore().toString());
        this.router.navigate(['/geography']);
      }, 500);
    }
  }

  getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
      return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  }

  checkFinish() {
    let horizontalWords = 0;
    let verticalWords = 0;
    this.solution.forEach(word => {
      if (word.indexOf(' ') === -1) {
        horizontalWords = horizontalWords + 1;
      }
    });

    for (let i = 0; i < 5; i++) {
      if (this.solution[0][i] !== ' ' && this.solution[1][i] !== ' ' && this.solution[2][i] !== ' '
        && this.solution[3][i] !== ' ' && this.solution[4][i] !== ' ') {
        verticalWords = verticalWords + 1;
      }
    }

    return horizontalWords + verticalWords;
  }

  replaceAll(word: string): string {
    if (!word)
      return "";
    let x = this.replace(word, /nj/g, 'x');
    x = this.replace(x, /dj/g, 'đ');
    x = this.replace(x, /lj/g, 'w');
    x = this.replace(x, /dž/g, 'q');

    return x;
  }

  replace(word: string, regexp: RegExp, replace: string) {
    return word.toLowerCase().replace(regexp, replace);
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
          this.router.navigate(['/geography']);
        }, 500);
      }
    }, 1000);
  }

}
