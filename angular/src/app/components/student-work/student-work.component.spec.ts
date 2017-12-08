import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWorkComponent } from './student-work.component';

describe('StudentWorkComponent', () => {
  let component: StudentWorkComponent;
  let fixture: ComponentFixture<StudentWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
