import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectflexComponent } from './selectflex.component';

describe('SelectflexComponent', () => {
  let component: SelectflexComponent;
  let fixture: ComponentFixture<SelectflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
