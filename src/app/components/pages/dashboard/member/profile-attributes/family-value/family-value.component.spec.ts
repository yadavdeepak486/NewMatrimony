import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyValueComponent } from './family-value.component';

describe('FamilyValueComponent', () => {
  let component: FamilyValueComponent;
  let fixture: ComponentFixture<FamilyValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
