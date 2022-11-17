import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithExcelComponent } from './working-with-excel.component';

describe('WorkingWithExcelComponent', () => {
  let component: WorkingWithExcelComponent;
  let fixture: ComponentFixture<WorkingWithExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
