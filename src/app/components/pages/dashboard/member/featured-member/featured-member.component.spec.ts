import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMemberComponent } from './featured-member.component';

describe('FeaturedMemberComponent', () => {
  let component: FeaturedMemberComponent;
  let fixture: ComponentFixture<FeaturedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
