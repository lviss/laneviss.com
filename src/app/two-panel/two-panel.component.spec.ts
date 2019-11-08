import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPanelComponent } from './two-panel.component';

describe('TwoPanelComponent', () => {
  let component: TwoPanelComponent;
  let fixture: ComponentFixture<TwoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
