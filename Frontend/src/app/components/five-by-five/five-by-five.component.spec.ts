import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveByFiveComponent } from './five-by-five.component';

describe('FiveByFiveComponent', () => {
  let component: FiveByFiveComponent;
  let fixture: ComponentFixture<FiveByFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveByFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveByFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
