import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonsignComponent } from './moonsign.component';

describe('MoonsignComponent', () => {
  let component: MoonsignComponent;
  let fixture: ComponentFixture<MoonsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
