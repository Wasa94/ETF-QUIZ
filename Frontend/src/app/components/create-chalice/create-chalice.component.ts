import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-chalice',
  templateUrl: './create-chalice.component.html',
  styleUrls: ['./create-chalice.component.css']
})
export class CreateChaliceComponent implements OnInit {

  form = new FormGroup({
    question_9_1: new FormControl('', Validators.required),
    question_8_1: new FormControl('', Validators.required),
    question_7_1: new FormControl('', Validators.required),
    question_6_1: new FormControl('', Validators.required),
    question_5_1: new FormControl('', Validators.required),
    question_4_1: new FormControl('', Validators.required),
    question_3: new FormControl('', Validators.required),
    question_4_2: new FormControl('', Validators.required),
    question_5_2: new FormControl('', Validators.required),
    question_6_2: new FormControl('', Validators.required),
    question_7_2: new FormControl('', Validators.required),
    question_8_2: new FormControl('', Validators.required),
    question_9_2: new FormControl('', Validators.required),
    answer_9_1: new FormControl('', Validators.required),
    answer_8_1: new FormControl('', Validators.required),
    answer_7_1: new FormControl('', Validators.required),
    answer_6_1: new FormControl('', Validators.required),
    answer_5_1: new FormControl('', Validators.required),
    answer_4_1: new FormControl('', Validators.required),
    answer_3: new FormControl('', Validators.required),
    answer_4_2: new FormControl('', Validators.required),
    answer_5_2: new FormControl('', Validators.required),
    answer_6_2: new FormControl('', Validators.required),
    answer_7_2: new FormControl('', Validators.required),
    answer_8_2: new FormControl('', Validators.required),
    answer_9_2: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    if(!this.checkAllLengths())
      return;

    if (!this.checkDifference(this.form.value['answer_9_1'].toLowerCase(), this.form.value['answer_8_1'].toLowerCase())) {
      alert('Answers 9 up and 8 up have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_8_1'].toLowerCase(), this.form.value['answer_7_1'].toLowerCase())) {
      alert('Answers 8 up and 7 up have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_7_1'].toLowerCase(), this.form.value['answer_6_1'].toLowerCase())) {
      alert('Answers 7 up and 6 up have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_6_1'].toLowerCase(), this.form.value['answer_5_1'].toLowerCase())) {
      alert('Answers 6 up and 5 up have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_5_1'].toLowerCase(), this.form.value['answer_4_1'].toLowerCase())) {
      alert('Answers 5 up and 4 up have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_4_1'].toLowerCase(), this.form.value['answer_3'].toLowerCase())) {
      alert('Answers 4 up and 3 have more than 1 difference!');
      return;
    }

    
    if (!this.checkDifference(this.form.value['answer_9_2'].toLowerCase(), this.form.value['answer_8_2'].toLowerCase())) {
      alert('Answers 9 down and 8 down have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_8_2'].toLowerCase(), this.form.value['answer_7_2'].toLowerCase())) {
      alert('Answers 8 down and 7 down have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_7_2'].toLowerCase(), this.form.value['answer_6_2'].toLowerCase())) {
      alert('Answers 7 down and 6 down have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_6_2'].toLowerCase(), this.form.value['answer_5_2'].toLowerCase())) {
      alert('Answers 6 down and 5 down have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_5_2'].toLowerCase(), this.form.value['answer_4_2'].toLowerCase())) {
      alert('Answers 5 down and 4 down have more than 1 difference!');
      return;
    }
    if (!this.checkDifference(this.form.value['answer_4_2'].toLowerCase(), this.form.value['answer_3'].toLowerCase())) {
      alert('Answers 4 down and 3 have more than 1 difference!');
      return;
    }

    this.http.put(this.dataService.backendUrl + '/chalices', this.form.value).subscribe(
      data => {
        alert('Chalice created!');
        this.router.navigate(['/supervisor']);
      },
      error => {
        alert(error.message);
      }
    );
  }

  checkAllLengths(): boolean {
    if(this.checkLength(this.form.value['answer_9_1']) !== 9)
    {
      alert('Length of answer 9 up is not 9!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_8_1']) !== 8)
    {
      alert('Length of answer 8 up is not 8!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_7_1']) !== 7)
    {
      alert('Length of answer 7 up is not 7!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_6_1']) !== 6)
    {
      alert('Length of answer 6 up is not 6!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_5_1']) !== 5)
    {
      alert('Length of answer 5 up is not 5!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_4_1']) !== 4)
    {
      alert('Length of answer 4 up is not 4!');
      return false;
    }

    if(this.checkLength(this.form.value['answer_3']) !== 3)
    {
      alert('Length of answer 3 is not 3!');
      return false;
    }
    
    if(this.checkLength(this.form.value['answer_9_2']) !== 9)
    {
      alert('Length of answer 9 down is not 9!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_8_2']) !== 8)
    {
      alert('Length of answer 8 down is not 8!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_7_2']) !== 7)
    {
      alert('Length of answer 7 down is not 7!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_6_2']) !== 6)
    {
      alert('Length of answer 6 down is not 6!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_5_2']) !== 5)
    {
      alert('Length of answer 5 down is not 5!');
      return false;
    }
    if(this.checkLength(this.form.value['answer_4_2']) !== 4)
    {
      alert('Length of answer 4 down is not 4!');
      return false;
    }

    return true;
  }
  
  checkLength(word: string): number {
    if(!word)
      return -1;
    let x = this.replace(word, /nj/g, 'x');  
    x = this.replace(x, /dj/g, 'đ');
    x = this.replace(x, /lj/g, 'w');
    x = this.replace(x, /dž/g, 'q');

    return x.length;
  }

  replace(word: string, regexp: RegExp, replace: string) {
    return word.toLowerCase().replace(regexp, replace);
  }

  checkDifference(first: string, second: string): boolean {
    const diff = this.getDifference(first, second);
    if (diff.length !== second.length || !diff.every((value, index) => value === second.split('').sort()[index])) {
      return false;
    }

    return true;
  }

  getDifference(first: string, second: string) {
    let a = first.split('').sort();
    let b = second.split('').sort();
    let result = [];
    while (a.length > 0 && b.length > 0) {
      if (a[0] < b[0]) { a.shift(); }
      else if (a[0] > b[0]) { b.shift(); }
      else /* they're equal */ {
        result.push(a.shift());
        b.shift();
      }
    }

    return result;
  }


}
