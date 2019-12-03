import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbendComponent } from './selectbend.component';

describe('SelectbendComponent', () => {
  let component: SelectbendComponent;
  let fixture: ComponentFixture<SelectbendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectbendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
