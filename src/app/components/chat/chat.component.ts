import { Component, OnInit} from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{

  mensaje: string = "";
  elemento: any;
//Inicializa el servicio y cargan los mensajes a la pantalla
  constructor(public _cs:ChatService) {

    this._cs.cargarMensajes()
            .subscribe(()=>{

              setTimeout(()=>{
                this.elemento.scrollTop = this.elemento.scrollHeight;
              },20);

            });
  }
  //Carga el documento de mensajes al iniciar la app
  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');

  }

//Envia los mensajes...lo muestra por consola y los agrega a la base de datos
  enviar_mensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length===0) {
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
            .then(()=>this.mensaje="")
            .catch((err)=>console.log('Error al enviar', err));


  }

}
