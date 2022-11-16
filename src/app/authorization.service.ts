import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private profileService: ProfileService) { }

  public isAuthorized(): boolean {
    let isLoggedIn = this.profileService.getLoginStatus();
    console.log("isLoggedIn ==>", isLoggedIn);
    return !isLoggedIn ? false : true;
  }

}
