import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The custom HTML tag for this component
  template: `
    <div class="app-container">
      <h1>Welcome to My Angular App!</h1>
      <p>This is a sample application component.</p>
      <button (click)="onButtonClick()">Click Me</button>
    </div>
  `,
  styles: [
    `
      .app-container {
        text-align: center;
        margin-top: 50px;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: #2c3e50;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      button:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class AppComponent {
  onButtonClick(): void {
    alert('Button clicked!');
  }
}
