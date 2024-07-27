import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get('http://localhost:5000/api/hello').subscribe(
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