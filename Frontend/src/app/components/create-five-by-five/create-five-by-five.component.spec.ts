import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFiveByFiveComponent } from './create-five-by-five.component';

describe('CreateFiveByFiveComponent', () => {
  let component: CreateFiveByFiveComponent;
  let fixture: ComponentFixture<CreateFiveByFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFiveByFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFiveByFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
