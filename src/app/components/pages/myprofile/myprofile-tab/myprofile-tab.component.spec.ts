import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileTabComponent } from './myprofile-tab.component';

describe('MyprofileTabComponent', () => {
  let component: MyprofileTabComponent;
  let fixture: ComponentFixture<MyprofileTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofileTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
