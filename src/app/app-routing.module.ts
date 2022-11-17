import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/signin-or-signout/login/login.component';
import { RegisterComponent } from './components/signin-or-signout/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { LoginAntdComponent } from './components/ant-design/login-antd/login-antd.component';
import { RegisterAntdComponent } from './components/ant-design/register-antd/register-antd.component';
import { IconAntdComponent } from './components/ant-design/icon-antd/icon-antd.component';
import { IndexComponent } from './components/index/index.component';
import { AngularCommandComponent } from './components/home/angular-command/angular-command.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login-antd', component: LoginAntdComponent },
  { path: 'register-antd', component: RegisterAntdComponent },
  { path: 'icon-antd', component: IconAntdComponent, canActivate: [AuthGuard] },
  { path: 'index', component: IndexComponent,
    children: [
      {
        path: 'home', canActivate: [AuthGuard], data: { functionCode: '0001', function: ['home'] },
        loadChildren: () => import('./modules/home.module').then(m => m.HomeModule), //异步加载、惰性加载、懒加载
      },
      {
        path: 'working-menu', canActivate: [AuthGuard], data: { functionCode: '0002', function: ['working-menu'] },
        loadChildren: () => import('./components/working-menu/working-menu.module').then(m => m.WorkingMenuModule), //异步加载、惰性加载、懒加载
      },
      { path: 'angular-command', canActivate: [AuthGuard], data: { functionCode: '0000', function: ['welcome'] }, component: AngularCommandComponent },
    ]
  },
  { path: 'message', component: MessageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), //注意用于懒加载的模块必须是forChild方式引入  //{onSameUrlNavigation: 'reload', enableTracing: true, relativeLinkResolution: 'legacy'}
    // RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    // RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
