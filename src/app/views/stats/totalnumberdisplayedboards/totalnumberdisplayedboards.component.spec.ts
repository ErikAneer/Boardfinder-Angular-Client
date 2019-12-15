import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalnumberdisplayedboardsComponent } from './totalnumberdisplayedboards.component';

describe('TotalnumberdisplayedboardsComponent', () => {
  let component: TotalnumberdisplayedboardsComponent;
  let fixture: ComponentFixture<TotalnumberdisplayedboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalnumberdisplayedboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalnumberdisplayedboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
