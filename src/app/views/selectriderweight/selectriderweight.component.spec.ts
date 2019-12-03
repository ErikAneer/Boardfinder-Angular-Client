import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectriderweightComponent } from './selectriderweight.component';

describe('SelectriderweightcomponentComponent', () => {
  let component: SelectriderweightComponent;
  let fixture: ComponentFixture<SelectriderweightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectriderweightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectriderweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
