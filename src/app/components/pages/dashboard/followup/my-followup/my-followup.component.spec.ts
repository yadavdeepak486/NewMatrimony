import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowupComponent } from './my-followup.component';

describe('MyFollowupComponent', () => {
  let component: MyFollowupComponent;
  let fixture: ComponentFixture<MyFollowupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFollowupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
