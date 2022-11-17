import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterAntdComponent } from './register-antd.component';

describe('RegisterAntdComponent', () => {
  let component: RegisterAntdComponent;
  let fixture: ComponentFixture<RegisterAntdComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAntdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
