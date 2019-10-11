import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { FiveByFiveComponent } from './components/five-by-five/five-by-five.component';
import { AnagramComponent } from './components/anagram/anagram.component';
import { ChaliceComponent } from './components/chalice/chalice.component';
import { MyNumberComponent } from './components/my-number/my-number.component';
import { GeographyComponent } from './components/geography/geography.component';
import { PlayerComponent } from './components/player/player.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { CreateAnagramComponent } from './components/create-anagram/create-anagram.component';
import { CreateFiveByFiveComponent } from './components/create-five-by-five/create-five-by-five.component';
import { CreateChaliceComponent } from './components/create-chalice/create-chalice.component';
import { CreateGameOfTheDayComponent } from './components/create-game-of-the-day/create-game-of-the-day.component';
import { ResultsMonthComponent } from './components/results-month/results-month.component';
import { ResultsTodayComponent } from './components/results-today/results-today.component';
import { ResultsComponent } from './components/results/results.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordQuestionComponent } from './components/forgot-password-question/forgot-password-question.component';
import { ForgotPasswordNewComponent } from './components/forgot-password-new/forgot-password-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '5x5', component: FiveByFiveComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'chalice', component: ChaliceComponent },
  { path: 'mynumber', component: MyNumberComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'supervisor', component: SupervisorComponent },
  { path: 'createAnagram', component: CreateAnagramComponent },
  { path: 'create5x5', component: CreateFiveByFiveComponent },
  { path: 'createChalice', component: CreateChaliceComponent },
  { path: 'createGameOfTheDay', component: CreateGameOfTheDayComponent },
  { path: 'resultsMonth', component: ResultsMonthComponent },
  { path: 'resultsToday', component: ResultsTodayComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'forgotPasswordQuestion', component: ForgotPasswordQuestionComponent },
  { path: 'forgotPasswordNew', component: ForgotPasswordNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
