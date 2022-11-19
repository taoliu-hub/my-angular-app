import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkayCancelComponent } from './okay-cancel.component';

describe('OkayCancelComponent', () => {
  let component: OkayCancelComponent;
  let fixture: ComponentFixture<OkayCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkayCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkayCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
