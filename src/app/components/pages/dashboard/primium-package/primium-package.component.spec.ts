import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimiumPackageComponent } from './primium-package.component';

describe('PrimiumPackageComponent', () => {
  let component: PrimiumPackageComponent;
  let fixture: ComponentFixture<PrimiumPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimiumPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimiumPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
