import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // The messageService property must be public in order to bind it to the template.
  // Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
