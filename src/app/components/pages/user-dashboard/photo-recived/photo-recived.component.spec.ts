import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRecivedComponent } from './photo-recived.component';

describe('PhotoRecivedComponent', () => {
  let component: PhotoRecivedComponent;
  let fixture: ComponentFixture<PhotoRecivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRecivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRecivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
