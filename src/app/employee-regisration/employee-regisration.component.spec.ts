import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegisrationComponent } from './employee-regisration.component';

describe('EmployeeRegisrationComponent', () => {
  let component: EmployeeRegisrationComponent;
  let fixture: ComponentFixture<EmployeeRegisrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegisrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegisrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
