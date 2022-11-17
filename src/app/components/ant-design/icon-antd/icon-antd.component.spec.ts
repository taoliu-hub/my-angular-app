import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAntdComponent } from './icon-antd.component';

describe('IconAntdComponent', () => {
  let component: IconAntdComponent;
  let fixture: ComponentFixture<IconAntdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAntdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
