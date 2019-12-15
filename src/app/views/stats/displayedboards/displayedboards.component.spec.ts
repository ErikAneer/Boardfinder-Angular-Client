import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedboardsComponent } from './displayedboards.component';

describe('DisplayedboardsComponent', () => {
  let component: DisplayedboardsComponent;
  let fixture: ComponentFixture<DisplayedboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
