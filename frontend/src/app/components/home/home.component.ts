import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiData: string | null = null;

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('/api/data', { responseType: 'text' }).subscribe(
      (data) => {
        this.apiData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}