import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStaffsComponent } from './add-new-staffs.component';

describe('AddNewStaffsComponent', () => {
  let component: AddNewStaffsComponent;
  let fixture: ComponentFixture<AddNewStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
