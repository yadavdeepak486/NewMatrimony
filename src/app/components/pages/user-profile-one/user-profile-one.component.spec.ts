import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileOneComponent } from './user-profile-one.component';

describe('UserProfileOneComponent', () => {
  let component: UserProfileOneComponent;
  let fixture: ComponentFixture<UserProfileOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
