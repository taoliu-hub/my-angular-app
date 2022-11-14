import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nickname = '';

  constructor(private profileService: ProfileService){
  }

  ngAfterViewChecked() {
    this.profileService.authData$?.subscribe(data => this.nickname = data?.nickname);
  }
}
