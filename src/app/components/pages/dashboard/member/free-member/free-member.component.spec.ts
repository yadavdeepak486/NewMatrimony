import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMemberComponent } from './free-member.component';

describe('FreeMemberComponent', () => {
  let component: FreeMemberComponent;
  let fixture: ComponentFixture<FreeMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
