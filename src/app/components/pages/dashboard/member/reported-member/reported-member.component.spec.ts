import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedMemberComponent } from './reported-member.component';

describe('ReportedMemberComponent', () => {
  let component: ReportedMemberComponent;
  let fixture: ComponentFixture<ReportedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
