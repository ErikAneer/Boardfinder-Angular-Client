import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectshapeComponent } from './selectshape.component';

describe('SelectshapeComponent', () => {
  let component: SelectshapeComponent;
  let fixture: ComponentFixture<SelectshapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectshapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
