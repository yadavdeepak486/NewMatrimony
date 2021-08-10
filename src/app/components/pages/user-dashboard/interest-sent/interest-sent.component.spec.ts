import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestSentComponent } from './interest-sent.component';

describe('InterestSentComponent', () => {
  let component: InterestSentComponent;
  let fixture: ComponentFixture<InterestSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
