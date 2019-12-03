import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedboardComponent } from './selectedboard.component';

describe('SelectedboardComponent', () => {
  let component: SelectedboardComponent;
  let fixture: ComponentFixture<SelectedboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
