import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithMultiselectDropdownComponent } from './working-with-multiselect-dropdown.component';

describe('WorkingWithMultiselectDropdownComponent', () => {
  let component: WorkingWithMultiselectDropdownComponent;
  let fixture: ComponentFixture<WorkingWithMultiselectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithMultiselectDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithMultiselectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
