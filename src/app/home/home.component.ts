import { Component } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
}
