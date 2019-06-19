import { Component } from '@angular/core';

import { ChatService } from "./services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//inicializa el servicio de chat en el constructor
  constructor(public _cs:ChatService) {

  }


}
