import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-anagram',
  templateUrl: './create-anagram.component.html',
  styleUrls: ['./create-anagram.component.css']
})
export class CreateAnagramComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    problem: new FormControl('', Validators.required),
    solution: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    if (!this.areAnagrams(this.form.value['problem'], this.form.value['solution'])) {
      alert('These strings are not anagrams!');
      return;
    }
    
    this.http.put(this.dataService.backendUrl + '/anagrams', this.form.value).subscribe(
      data => {
        alert('Anagram created!');
        this.router.navigate(['/supervisor']);
      },
      error => {
        alert(error.message);
      }
    );
  }

  areAnagrams(a: string, b: string): boolean {
    var y = a.toLowerCase().replace(/\s/g, '').split("").sort().join(""),
      z = b.toLowerCase().replace(/\s/g, '').split("").sort().join("");
    return z === y;
  }

}
