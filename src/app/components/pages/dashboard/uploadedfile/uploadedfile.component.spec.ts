import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedfileComponent } from './uploadedfile.component';

describe('UploadedfileComponent', () => {
  let component: UploadedfileComponent;
  let fixture: ComponentFixture<UploadedfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadedfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadedfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
