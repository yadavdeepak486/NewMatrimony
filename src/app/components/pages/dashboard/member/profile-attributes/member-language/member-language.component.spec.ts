import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLanguageComponent } from './member-language.component';

describe('MemberLanguageComponent', () => {
  let component: MemberLanguageComponent;
  let fixture: ComponentFixture<MemberLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
