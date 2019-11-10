import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstComponent } from './pst.component';

describe('PstComponent', () => {
  let component: PstComponent;
  let fixture: ComponentFixture<PstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
