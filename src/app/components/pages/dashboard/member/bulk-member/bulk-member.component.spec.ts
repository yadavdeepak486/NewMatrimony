import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkMemberComponent } from './bulk-member.component';

describe('BulkMemberComponent', () => {
  let component: BulkMemberComponent;
  let fixture: ComponentFixture<BulkMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
