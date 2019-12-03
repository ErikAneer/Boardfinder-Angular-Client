import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectridingtypecomponentComponent } from './selectridingtypecomponent.component';

describe('SelectridingtypecomponentComponent', () => {
  let component: SelectridingtypecomponentComponent;
  let fixture: ComponentFixture<SelectridingtypecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectridingtypecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectridingtypecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
