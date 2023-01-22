import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Bro. Jackson', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message('2', 'Steve Johnson', 'When is assignment 3 due', 'Steve Johnson'),
    new Message('3', 'Mark Smith', 'Can I meet with you sometime, I need help with assignment 3', 'Mark Smith'),
  ]

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
