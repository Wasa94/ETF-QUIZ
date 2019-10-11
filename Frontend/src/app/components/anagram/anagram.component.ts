import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Anagram } from 'src/app/models/anagram';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  
  anagram: Anagram = null;
  time = 60;
  score = 0;

  public form: FormGroup = new FormGroup({
    solution: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() {
    this.anagram = JSON.parse(sessionStorage.getItem('anagram'));
    this.score = +sessionStorage.getItem('score');
    this.initTimer();
  }  
  
  submit() {
    const solution: string = this.form.value['solution'];
    if(solution.toLowerCase() === this.anagram.solution.toLowerCase())
    {
      this.score = this.score + 10;
      sessionStorage.setItem('score', this.score.toString());
      alert('Correct!');
    }
    else alert('Wrong!');
    this.router.navigate(['/mynumber']);
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
          this.router.navigate(['/mynumber']);
        }, 500);
      }
    }, 1000);
  }

}
