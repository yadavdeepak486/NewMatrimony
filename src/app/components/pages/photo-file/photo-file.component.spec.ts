import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFileComponent } from './photo-file.component';

describe('PhotoFileComponent', () => {
  let component: PhotoFileComponent;
  let fixture: ComponentFixture<PhotoFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
