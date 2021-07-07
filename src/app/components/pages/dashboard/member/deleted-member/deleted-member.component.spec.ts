import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedMemberComponent } from './deleted-member.component';

describe('DeletedMemberComponent', () => {
  let component: DeletedMemberComponent;
  let fixture: ComponentFixture<DeletedMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
