import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  currentSender: string = 'Alvaro';
  @Output() addMessageEvent = new EventEmitter<Message>();
  
  @ViewChild('subject') subjectInput!: ElementRef;
  @ViewChild('msgText') msgTextInput!: ElementRef;
  
  onSendMessage() {
    const subjectValue = this.subjectInput.nativeElement.value;
    const msgTextValue = this.msgTextInput.nativeElement.value;

    const newMessage = new Message('5', subjectValue, msgTextValue, this.currentSender);

    this.addMessageEvent.emit(newMessage);
    
    this.onClear();
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
