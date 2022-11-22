import { registerLocaleData } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US, zh_CN, zh_HK, zh_TW, NzI18nService } from "ng-zorro-antd/i18n";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonShareModule } from "./common-share.module";
import { IconAntdComponent } from "./components/ant-design/icon-antd/icon-antd.component";
import { LoginAntdComponent } from "./components/ant-design/login-antd/login-antd.component";
import { RegisterAntdComponent } from "./components/ant-design/register-antd/register-antd.component";
import { GlobalContentComponent } from "./components/global-content/global-content.component";
import { IndexComponent } from "./components/index/index.component";
import { MessageComponent } from "./components/message/message.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { OkayCancelComponent } from "./components/pop-up-window/okay-cancel/okay-cancel.component";
import { LoginComponent } from "./components/signin-or-signout/login/login.component";
import { RegisterComponent } from "./components/signin-or-signout/register/register.component";
import { HeaderInterceptorService } from "./header-interceptor.service";
import { ProfileService } from "./profile.service";

import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';

registerLocaleData(en);
registerLocaleData(zh);

/** 配置 ng-zorro-antd 国际化 **/

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GlobalContentComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    OkayCancelComponent,
    LoginAntdComponent,
    RegisterAntdComponent,
    IconAntdComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonShareModule
  ],
  exports: [CommonShareModule],
  providers: [
    ProfileService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true },
    // { provide: NZ_I18N, useValue: en_US },  // or use below config
    {
      provide: NZ_I18N, useFactory: (localId: string) => {
        console.log(localId);
        switch (localId) {
          case 'en':
            return en_US;
          /** 与 angular.json i18n/locales 配置一致 **/
          case 'zh':
            return zh_CN;
          case 'hk':
            return zh_HK;
          default:
            return zh_TW;
        }
      },
      deps: [LOCALE_ID]
    },
    // { provide: LocationStrategy, useClass: HashLocationStrategy } // add '#' in url
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private i18n: NzI18nService) { }

  switchLanguage() {
    this.i18n.setLocale(zh_TW);
  }
}
