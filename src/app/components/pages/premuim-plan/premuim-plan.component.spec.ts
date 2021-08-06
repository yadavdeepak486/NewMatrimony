import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremuimPlanComponent } from './premuim-plan.component';

describe('PremuimPlanComponent', () => {
  let component: PremuimPlanComponent;
  let fixture: ComponentFixture<PremuimPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremuimPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremuimPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
