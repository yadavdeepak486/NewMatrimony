import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditionTwoComponent } from './termsandcondition-two.component';

describe('TermsandconditionTwoComponent', () => {
  let component: TermsandconditionTwoComponent;
  let fixture: ComponentFixture<TermsandconditionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandconditionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
