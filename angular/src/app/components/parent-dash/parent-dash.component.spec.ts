import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDashComponent } from './parent-dash.component';

describe('ParentDashComponent', () => {
  let component: ParentDashComponent;
  let fixture: ComponentFixture<ParentDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
