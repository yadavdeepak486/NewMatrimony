import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyStatusComponent } from './family-status.component';

describe('FamilyStatusComponent', () => {
  let component: FamilyStatusComponent;
  let fixture: ComponentFixture<FamilyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
