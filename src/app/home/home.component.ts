import { Component } from '@angular/core';
import { first, last } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = 'John Doe';
  getCurrentYear(){
    return new Date().getFullYear();
  }
  userList = {
    first: 'John',
    last: 'Doe'
  }

  // property binding
  title = 'Property Binding';
  isDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  name = "Baljinder";
  parentMessage = "Message from Bapu";

  childMessage: string = "Hello Beta";
  receiveMessage(event: string){
    this.childMessage = event;
  }
}
