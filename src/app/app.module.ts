import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonShareModule } from './common-share.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileService } from './profile.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { PopUpWindowComponent } from './components/pop-up-window/pop-up-window.component';
import { HeaderInterceptorService } from './header-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginAntdComponent } from './components/login-antd/login-antd.component';

registerLocaleData(en);
registerLocaleData(zh);

/** 配置 ng-zorro-antd 国际化 **/
import { en_US, NzI18nService, NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { RegisterAntdComponent } from './components/register-antd/register-antd.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    PopUpWindowComponent,
    LoginAntdComponent,
    RegisterAntdComponent,
  ],
  imports: [
    BrowserModule,
    CommonShareModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    PageNotFoundComponent,
  ],
  providers: [
    ProfileService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true },
    {
      provide: NZ_I18N, useFactory: (localId: string) => {
        switch (localId) {
          case 'en':
            return en_US;
          /** 与 angular.json i18n/locales 配置一致 **/
          case 'zh':
            return zh_CN;
          default:
            return en_US;
        }
      },
      deps: [LOCALE_ID]
    },
    // { provide: LocationStrategy, useClass: HashLocationStrategy } // add '#' in url
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
  constructor(private i18n: NzI18nService) { }

  switchLanguage() {
    this.i18n.setLocale(en_US);
  }
}
