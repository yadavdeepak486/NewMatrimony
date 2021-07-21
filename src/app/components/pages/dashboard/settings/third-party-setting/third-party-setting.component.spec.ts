import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartySettingComponent } from './third-party-setting.component';

describe('ThirdPartySettingComponent', () => {
  let component: ThirdPartySettingComponent;
  let fixture: ComponentFixture<ThirdPartySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
