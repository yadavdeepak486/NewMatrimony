import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewedComponent } from './contact-viewed.component';

describe('ContactViewedComponent', () => {
  let component: ContactViewedComponent;
  let fixture: ComponentFixture<ContactViewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactViewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
