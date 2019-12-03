import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectriderlevelComponent } from './selectriderlevel.component';

describe('SelectriderlevelComponent', () => {
  let component: SelectriderlevelComponent;
  let fixture: ComponentFixture<SelectriderlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectriderlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectriderlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
