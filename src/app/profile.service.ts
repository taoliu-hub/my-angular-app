import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  authData$!: Observable<any> | null;
  authInfo:any;

  constructor(
    private http: HttpClient,
    private router: Router) {
      this.authInfo = this.getDecryptionObj("token");
      console.log("authInfo is not null: ==>", !!this.authInfo)
      this.setAuthData$();
  }

  setAuthData$() {
    if(this.authInfo) {
      this.authData$ = this.http.get(`http://localhost:3000/users/${this.authInfo?.id}`)
      .pipe(
        tap(console.log),
        shareReplay()   // one call for： this.data$.subscribe();
      );
    } else {
      this.authData$ = null;
    }
  }

  /**
   * updateLoggedStatus
   */
  updateLoggedStatus(body: any) {
    return this.http.put(`http://localhost:3000/users/${body?.id}`, body);
  }

  /**
   * loggedInStatus
   */
  getLoginStatus(): boolean {
    //check ig user is logged in
    return this.authInfo ? this.authInfo?.isLoggedIn : false;
  }

  /**
   * show error
   */
  showMessage(type: string, code: string) {
    this.router.navigateByUrl(`/message?type=${type}&code=${code}`);
  }

  public setEncryptionObj(key: string, obj: any): void {
    const username = localStorage.getItem('username');
    localStorage[key] = Buffer.from(username + "&" + key + "=" + JSON.stringify(obj)).toString('base64');
  }

  public getDecryptionObj(key: string): any {
    if (key && localStorage[key]) {
      const objStr = new URLSearchParams(Buffer.from(localStorage[key], 'base64').toString()).get(key);
      return objStr ? JSON.parse(objStr) : null;
    }
    return null;
  }


}
