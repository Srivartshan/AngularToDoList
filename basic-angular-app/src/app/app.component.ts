import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <h1>Welcome to the Basic Angular App!</h1>
  <button (click)="fetchData()">Fetch Data</button>
  <div *ngIf="data">
    <p>Data fetched from service:</p>
    <pre>{{ data | json }}</pre>
  </div>
`,
styles: [`
  h1 { color: #007bff; }
  button { margin-top: 20px; padding: 10px 20px; }
  div { margin-top: 20px; }
`]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  data: any;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.data = response;
    });
  }
}