import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordQuestionComponent } from './forgot-password-question.component';

describe('ForgotPasswordQuestionComponent', () => {
  let component: ForgotPasswordQuestionComponent;
  let fixture: ComponentFixture<ForgotPasswordQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
