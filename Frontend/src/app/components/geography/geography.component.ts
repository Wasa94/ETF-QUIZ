import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css']
})
export class GeographyComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  
  form = new FormGroup({
    word: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  time = 120;
  score = 0;

  categories = ['Country', 'City', 'Lake', 'Mountain', 'River', 'Animal', 'Plant', 'Band'];

  country = ['', '', '', '', '', '', '', ''];
  nextCountry = 0;
  city = ['', '', '', '', '', '', '', ''];
  nextCity = 0;
  lake = ['', '', '', '', '', '', '', ''];
  nextLake = 0;
  mountain = ['', '', '', '', '', '', '', ''];
  nextMountain = 0;
  river = ['', '', '', '', '', '', '', ''];
  nextRiver = 0;
  animal = ['', '', '', '', '', '', '', ''];
  nextAnimal = 0;
  plant = ['', '', '', '', '', '', '', ''];
  nextPlant = 0;
  band = ['', '', '', '', '', '', '', ''];
  nextBand = 0;

  constructor(private router: Router) { }

  letter = '';

  ngOnInit() {
    this.letter = this.randomLetter();
    this.score = +sessionStorage.getItem('score');
    this.initTimer();
  }

  removeCategory(cat: number) {
    if (cat === 8) {
      for (var i = 0; i < this.categories.length; i++) {
        if (this.categories[i] === this.form.value['category']) {
          this.categories.splice(i, 1);
          this.form.reset();
          break;
        }
      }
    }
  }

  randomLetter() {
    const letters = ['A', 'B', 'C', 'Č', 'Ć', 'D', 'Dž', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Lj', 'M', 'N', 'Nj',
      'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'];
    return letters[Math.floor(Math.random() * letters.length)];
  }

  submit() {
    if (!this.form.value['word'].toLowerCase().startsWith(this.letter.toLowerCase())) return;

    switch (this.form.value['category']) {
      case 'Country':
        this.country[this.nextCountry++] = this.form.value['word'];
        this.removeCategory(this.nextCountry);
        break;
      case 'City':
        this.city[this.nextCity++] = this.form.value['word'];
        this.removeCategory(this.nextCity);
        break;
      case 'Lake':
        this.lake[this.nextLake++] = this.form.value['word'];
        this.removeCategory(this.nextLake);
        break;
      case 'Mountain':
        this.mountain[this.nextMountain++] = this.form.value['word'];
        this.removeCategory(this.nextMountain);
        break;
      case 'River':
        this.river[this.nextRiver++] = this.form.value['word'];
        this.removeCategory(this.nextRiver);
        break;
      case 'Animal':
        this.animal[this.nextAnimal++] = this.form.value['word'];
        this.removeCategory(this.nextAnimal);
        break;
      case 'Plant':
        this.plant[this.nextPlant++] = this.form.value['word'];
        this.removeCategory(this.nextPlant);
        break;
      case 'Band':
        this.band[this.nextBand++] = this.form.value['word'];
        this.removeCategory(this.nextBand);
        break;
    }

    if (this.checkFinish()) {
      setTimeout(() => {
        alert('Done!');
        this.router.navigate(['/chalice']);
      }, 500);
    }
  }

  checkFinish(): boolean {
    if (this.nextCountry === 8 && this.nextCity === 8 && this.nextPlant === 8 && this.nextMountain === 8 &&
      this.nextLake === 8 && this.nextBand === 8 && this.nextAnimal === 8 && this.nextCity === 8) {
      return true;
    }
    console.log(this.nextBand);
    return false;
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
          this.router.navigate(['/chalice']);
        }, 500);
      }
    }, 1000);
  }

}
