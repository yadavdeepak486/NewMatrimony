import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRecievedComponent } from './interest-recieved.component';

describe('InterestRecievedComponent', () => {
  let component: InterestRecievedComponent;
  let fixture: ComponentFixture<InterestRecievedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestRecievedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
