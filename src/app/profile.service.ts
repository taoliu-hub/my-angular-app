import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: any;
  isLoggedIn: boolean = false;
  authData$: Observable<any> | undefined;

  constructor(
    private http: HttpClient,
    private router: Router) {
    if (sessionStorage.getItem('userInfo')) {
      this.getUserByUserId();
    }
  }


  getUserByUserId() {
    let userJSONString = sessionStorage.getItem('userInfo');
    this.authData$ = this.http.get(`http://localhost:3000/users/${userJSONString ? JSON.parse(userJSONString)?.id : ''}`)
      .pipe(
        tap(console.log),
        shareReplay()   // one call for： this.data$.subscribe();
      );
  }

  /**
   * updateLoggedStatus
   */
  updateLoggedStatus(body: any) {
    this.authData$ = this.http.put(`http://localhost:3000/users/${body?.id}`, body)
      .pipe(
        tap(console.log),
        shareReplay()   // one call for： this.data$.subscribe();
      );
    return this.authData$;
  }

  /**
   * loggedInStatus
   */
  async getLoginStatus(): Promise<boolean> {
    //check ig user is logged in
    await this.authData$?.toPromise().then(data => {
      // console.log(data);
      // console.log(data?.username);
      this.isLoggedIn = data?.isLoggedIn;
    })
    return this.isLoggedIn;
  }

  setLoginStatus(authData: boolean) {
    sessionStorage.setItem('loginStatus', authData?.toString());
  }

  showMessage(type: string, code: string) {
    this.router.navigateByUrl(`/message?type=${type}&code=${code}`);
  }



}
