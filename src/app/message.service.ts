import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(val= null) {
    var msg = window.confirm("Do you really want to clear?")
    if (msg) { 
      val ? (this.messages = this.messages.slice(5)) :
      (this.messages = []) ;
    }
  }
}

