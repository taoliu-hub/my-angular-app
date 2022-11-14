import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { LoginAntdComponent } from './components/login-antd/login-antd.component';
import { RegisterAntdComponent } from './components/register-antd/register-antd.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginAntdComponent },
  { path: 'register', component: RegisterAntdComponent },
  { path: 'welcome', canActivate: [AuthGuard], data: { functionCode: '0000', function: ['welcome'] }, component: WelcomeComponent },
  {
    path: 'home', canActivate: [AuthGuard], data: { functionCode: '0001', function: ['home'] }, loadChildren: () => import('./routings/home.module').then(m => m.HomeModule), //异步加载、惰性加载、懒加载
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
