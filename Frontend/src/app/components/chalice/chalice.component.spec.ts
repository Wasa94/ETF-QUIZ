import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaliceComponent } from './chalice.component';

describe('ChaliceComponent', () => {
  let component: ChaliceComponent;
  let fixture: ComponentFixture<ChaliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
