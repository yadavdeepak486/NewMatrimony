import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOtpComponent } from './set-otp.component';

describe('SetOtpComponent', () => {
  let component: SetOtpComponent;
  let fixture: ComponentFixture<SetOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
