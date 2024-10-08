import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() message! : string;

@Output() messageEvent = new EventEmitter<string>();
sendMessage(){
  this.messageEvent.emit("Hello Bapu")

}
Visible = true; 
ToggleMessage(){
  this.Visible = !this.Visible;
}
showMsg = false;

itemList = ['Apple', 'Banana', 'Cherry', 'Dates']

userRole: string  = '';
}
