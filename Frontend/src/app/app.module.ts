import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiveByFiveComponent } from './components/five-by-five/five-by-five.component';
import { AnagramComponent } from './components/anagram/anagram.component';
import { ChaliceComponent } from './components/chalice/chalice.component';
import { MyNumberComponent } from './components/my-number/my-number.component';
import { GeographyComponent } from './components/geography/geography.component';
import { HttpClientModule } from '@angular/common/http';
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
import { DatePipe } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordQuestionComponent } from './components/forgot-password-question/forgot-password-question.component';
import { ForgotPasswordNewComponent } from './components/forgot-password-new/forgot-password-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    FiveByFiveComponent,
    AnagramComponent,
    ChaliceComponent,
    MyNumberComponent,
    GeographyComponent,
    PlayerComponent,
    AdministratorComponent,
    AdministrationComponent,
    SupervisorComponent,
    CreateAnagramComponent,
    CreateFiveByFiveComponent,
    CreateChaliceComponent,
    CreateGameOfTheDayComponent,
    ResultsMonthComponent,
    ResultsTodayComponent,
    ResultsComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ForgotPasswordQuestionComponent,
    ForgotPasswordNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
