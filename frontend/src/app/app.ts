import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Message from backend:</h1>
    <p>{{ message }}</p>
    <button (click)="fetchMessage()">Get Message</button>
  `,
})
export class App {
  message = '';

  constructor(private http: HttpClient) {}

  fetchMessage() {
    this.http.get('http://localhost:5255/Hello', { responseType: 'text' }).subscribe({
      next: (data) => this.message = data,
      error: (err) => this.message = 'Error: ' + err.message,
    });
  }
}
