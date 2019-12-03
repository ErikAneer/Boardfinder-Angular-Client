import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTechDetailComponent } from './exploretechdetail.component';

describe('ExplorebendComponent', () => {
  let component: ExploreTechDetailComponent;
  let fixture: ComponentFixture<ExploreTechDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTechDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
