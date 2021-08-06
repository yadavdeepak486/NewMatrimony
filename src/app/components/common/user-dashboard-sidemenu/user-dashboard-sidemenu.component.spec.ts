import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSidemenuComponent } from './user-dashboard-sidemenu.component';

describe('UserDashboardSidemenuComponent', () => {
  let component: UserDashboardSidemenuComponent;
  let fixture: ComponentFixture<UserDashboardSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
