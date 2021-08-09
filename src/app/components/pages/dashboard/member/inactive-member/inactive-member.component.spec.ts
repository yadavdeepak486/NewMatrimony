import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveMemberComponent } from './inactive-member.component';

describe('InactiveMemberComponent', () => {
  let component: InactiveMemberComponent;
  let fixture: ComponentFixture<InactiveMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
