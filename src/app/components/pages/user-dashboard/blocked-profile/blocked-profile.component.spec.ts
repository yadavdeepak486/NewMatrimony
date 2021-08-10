import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedProfileComponent } from './blocked-profile.component';

describe('BlockedProfileComponent', () => {
  let component: BlockedProfileComponent;
  let fixture: ComponentFixture<BlockedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
