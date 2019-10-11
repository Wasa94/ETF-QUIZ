import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ETF QUIZ';

  constructor(private router: Router){

  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  logged(): boolean {
    return sessionStorage.getItem('user') !== null;
  }
}
