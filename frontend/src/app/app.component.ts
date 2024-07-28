import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  `
})
export class AppComponent implements OnInit {
  title = 'Angular Frontend';
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/api/hello`).subscribe(
      (data: any) => {
        this.message = data.message;
      },
      error => {
        console.error('Error:', error);
        this.message = 'Error fetching data from backend';
      }
    );
  }
}