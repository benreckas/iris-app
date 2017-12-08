import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashComponent } from './teacher-dash.component';

describe('TeacherDashComponent', () => {
  let component: TeacherDashComponent;
  let fixture: ComponentFixture<TeacherDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
