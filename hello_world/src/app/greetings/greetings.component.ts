import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greetings',
  imports: [FormsModule],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css',
  standalone: true,
})
export class GreetingsComponent {
message="Hello from the Greetings Component!";
position="right";
fontColor="red";
authorName="Type in to Search";
changeMessage(){
  this.message="Greetings";
}
}
