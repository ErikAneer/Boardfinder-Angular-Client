import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsearchesComponent } from './totalsearches.component';

describe('TotalsearchesComponent', () => {
  let component: TotalsearchesComponent;
  let fixture: ComponentFixture<TotalsearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
