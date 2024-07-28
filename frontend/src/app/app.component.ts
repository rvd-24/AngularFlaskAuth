import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>My App</h1>
    <button (click)="login()">Login</button>
    <button (click)="getProfile()">Get Profile</button>
    <button (click)="getAuthInfo()">Get Auth Info</button>
    <pre>{{ profile | json }}</pre>
    <pre>{{ authInfo | json }}</pre>
  `
})
export class AppComponent {
  profile: any;
  authInfo: any;

  constructor(private authService: AuthService) {}

  login() {
    window.location.href = '/.auth/login/aad';
  }

  getProfile() {
    this.authService.getProfile().subscribe(
      profile => this.profile = profile,
      error => console.error('Error fetching profile', error)
    );
  }

  getAuthInfo() {
    this.authService.getAuthInfo().subscribe(
      info => this.authInfo = info,
      error => console.error('Error fetching auth info', error)
    );
  }
}