import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSortingBarChartComponent } from './dynamic-sorting-bar-chart.component';

describe('DynamicSortingBarChartComponent', () => {
  let component: DynamicSortingBarChartComponent;
  let fixture: ComponentFixture<DynamicSortingBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSortingBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSortingBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
