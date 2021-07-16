import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBehalfComponent } from './on-behalf.component';

describe('OnBehalfComponent', () => {
  let component: OnBehalfComponent;
  let fixture: ComponentFixture<OnBehalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBehalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBehalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
