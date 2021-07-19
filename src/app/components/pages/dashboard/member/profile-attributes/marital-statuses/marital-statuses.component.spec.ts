import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusesComponent } from './marital-statuses.component';

describe('MaritalStatusesComponent', () => {
  let component: MaritalStatusesComponent;
  let fixture: ComponentFixture<MaritalStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaritalStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
