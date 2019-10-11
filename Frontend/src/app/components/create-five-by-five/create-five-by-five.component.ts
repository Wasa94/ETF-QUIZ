import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-five-by-five',
  templateUrl: './create-five-by-five.component.html',
  styleUrls: ['./create-five-by-five.component.css']
})
export class CreateFiveByFiveComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    first: new FormControl('', Validators.required),
    second: new FormControl('', Validators.required),
    third: new FormControl('', Validators.required),
    fourth: new FormControl('', Validators.required),
    fifth: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    if(this.checkLength(this.form.value['first']) !== 5)
    {
      alert('Length of first word is not five!');
      return;
    }
    if(this.checkLength(this.form.value['second']) !== 5)
    {
      alert('Length of second word is not five!');
      return;
    }
    if(this.checkLength(this.form.value['third']) !== 5)
    {
      alert('Length of third word is not five!');
      return;
    }
    if(this.checkLength(this.form.value['fourth']) !== 5)
    {
      alert('Length of fourth word is not five!');
      return;
    }
    if(this.checkLength(this.form.value['fifth']) !== 5)
    {
      alert('Length of fifth word is not five!');
      return;
    }

    this.http.put(this.dataService.backendUrl + '/5x5', this.form.value).subscribe(
      data => {
        alert('5x5 created!');
        this.router.navigate(['/supervisor']);
      },
      error => {
        alert(error.message);
      }
    );
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

}
