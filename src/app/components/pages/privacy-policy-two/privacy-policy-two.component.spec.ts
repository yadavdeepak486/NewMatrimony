import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyTwoComponent } from './privacy-policy-two.component';

describe('PrivacyPolicyTwoComponent', () => {
  let component: PrivacyPolicyTwoComponent;
  let fixture: ComponentFixture<PrivacyPolicyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
