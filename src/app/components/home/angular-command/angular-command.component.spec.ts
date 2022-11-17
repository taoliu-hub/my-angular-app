import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCommandComponent } from './angular-command.component';

describe('AngularCommandComponent', () => {
  let component: AngularCommandComponent;
  let fixture: ComponentFixture<AngularCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
