import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectgenderComponent } from './selectgender.component';

describe('SelectgenderComponent', () => {
  let component: SelectgenderComponent;
  let fixture: ComponentFixture<SelectgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
