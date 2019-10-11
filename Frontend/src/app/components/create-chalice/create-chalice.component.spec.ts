import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChaliceComponent } from './create-chalice.component';

describe('CreateChaliceComponent', () => {
  let component: CreateChaliceComponent;
  let fixture: ComponentFixture<CreateChaliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChaliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChaliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
