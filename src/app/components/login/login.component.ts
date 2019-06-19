import { Component} from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent{
//Se carga el servicio de chatService 
  constructor(public _cs:ChatService) { }
//se ingresan los datos los usuario
  ingresar(proveedor:string){
    console.log(proveedor);

    this._cs.login(proveedor);

  }

}
