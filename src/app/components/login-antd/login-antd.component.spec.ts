import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAntdComponent } from './login-antd.component';

describe('LoginAntdComponent', () => {
  let component: LoginAntdComponent;
  let fixture: ComponentFixture<LoginAntdComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAntdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
