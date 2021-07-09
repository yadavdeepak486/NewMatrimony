import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyStoriesComponent } from './happy-stories.component';

describe('HappyStoriesComponent', () => {
  let component: HappyStoriesComponent;
  let fixture: ComponentFixture<HappyStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
