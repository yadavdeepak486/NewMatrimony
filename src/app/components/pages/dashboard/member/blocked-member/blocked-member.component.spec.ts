import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedMemberComponent } from './blocked-member.component';

describe('BlockedMemberComponent', () => {
  let component: BlockedMemberComponent;
  let fixture: ComponentFixture<BlockedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
