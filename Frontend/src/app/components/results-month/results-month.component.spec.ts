import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMonthComponent } from './results-month.component';

describe('ResultsMonthComponent', () => {
  let component: ResultsMonthComponent;
  let fixture: ComponentFixture<ResultsMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
