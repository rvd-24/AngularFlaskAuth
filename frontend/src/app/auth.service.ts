import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/profile`);
  }

  getAuthInfo(): Observable<any> {
    return this.http.get('/.auth/me');
  }
}