import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingsComponent],
  templateUrl: './app.component.html',
  template:'<h1></h1>~',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello_world';
  message = "Hello Angular!";
  message2 = "";
}
