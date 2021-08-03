import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTwoComponent } from './user-profile-two.component';

describe('UserProfileTwoComponent', () => {
  let component: UserProfileTwoComponent;
  let fixture: ComponentFixture<UserProfileTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
