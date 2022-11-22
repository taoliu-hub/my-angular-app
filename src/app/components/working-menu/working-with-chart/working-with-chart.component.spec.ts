import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithChartComponent } from './working-with-chart.component';

describe('WorkingWithChartComponent', () => {
  let component: WorkingWithChartComponent;
  let fixture: ComponentFixture<WorkingWithChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingWithChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
