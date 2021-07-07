import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProfileComponent } from './similar-profile.component';

describe('SimilarProfileComponent', () => {
  let component: SimilarProfileComponent;
  let fixture: ComponentFixture<SimilarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
