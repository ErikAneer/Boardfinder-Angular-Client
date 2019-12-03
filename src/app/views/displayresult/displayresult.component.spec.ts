import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayresultComponent } from './displayresult.component';

describe('DisplayresultComponent', () => {
  let component: DisplayresultComponent;
  let fixture: ComponentFixture<DisplayresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
