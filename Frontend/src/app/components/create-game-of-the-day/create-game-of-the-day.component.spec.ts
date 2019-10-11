import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameOfTheDayComponent } from './create-game-of-the-day.component';

describe('CreateGameOfTheDayComponent', () => {
  let component: CreateGameOfTheDayComponent;
  let fixture: ComponentFixture<CreateGameOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGameOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
