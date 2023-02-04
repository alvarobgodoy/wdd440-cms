import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../message.model';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  currentSender: string = '999';
  
  @ViewChild('subject') subjectInput!: ElementRef;
  @ViewChild('msgText') msgTextInput!: ElementRef;

  constructor(private messageService: MessageService) {}
  
  onSendMessage() {
    const subjectValue = this.subjectInput.nativeElement.value;
    const msgTextValue = this.msgTextInput.nativeElement.value;

    const newMessage = new Message('5', subjectValue, msgTextValue, this.currentSender);

    this.messageService.addMessage(newMessage);
    this.onClear();
  }

  onClear() {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
