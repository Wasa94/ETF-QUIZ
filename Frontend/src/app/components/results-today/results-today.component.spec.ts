import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTodayComponent } from './results-today.component';

describe('ResultsTodayComponent', () => {
  let component: ResultsTodayComponent;
  let fixture: ComponentFixture<ResultsTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
