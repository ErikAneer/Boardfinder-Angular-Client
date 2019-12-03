import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectshoesizeComponent } from './selectshoesize.component';

describe('SelectshoesizeComponent', () => {
  let component: SelectshoesizeComponent;
  let fixture: ComponentFixture<SelectshoesizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectshoesizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectshoesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
