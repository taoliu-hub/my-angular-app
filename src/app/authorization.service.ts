import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private profileService: ProfileService) { }

  public isAuthorized() {
    return this.profileService.getLoginStatus();
  }

}
