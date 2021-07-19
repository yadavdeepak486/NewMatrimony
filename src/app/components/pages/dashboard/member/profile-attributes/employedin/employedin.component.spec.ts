import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedinComponent } from './employedin.component';

describe('EmployedinComponent', () => {
  let component: EmployedinComponent;
  let fixture: ComponentFixture<EmployedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
