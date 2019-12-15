import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdetailstatsComponent } from './techdetailstats.component';

describe('TechdetailstatsComponent', () => {
  let component: TechdetailstatsComponent;
  let fixture: ComponentFixture<TechdetailstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechdetailstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechdetailstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
