import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlencodeComponent } from './urlencode.component';

describe('UrlencodeComponent', () => {
  let component: UrlencodeComponent;
  let fixture: ComponentFixture<UrlencodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlencodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlencodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
