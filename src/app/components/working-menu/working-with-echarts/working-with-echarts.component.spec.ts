import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithEchartsComponent } from './working-with-echarts.component';

describe('WorkingWithEchartsComponent', () => {
  let component: WorkingWithEchartsComponent;
  let fixture: ComponentFixture<WorkingWithEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithEchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingWithEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
