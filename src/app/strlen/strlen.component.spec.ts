import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrlenComponent } from './strlen.component';

describe('StrlenComponent', () => {
  let component: StrlenComponent;
  let fixture: ComponentFixture<StrlenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrlenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
