import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//Se importa la interface de mensaje
import { Mensaje } from "../interface/mensaje.interface";


import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
//Se crea una variable que guarda los mensajes desde firebase
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
//Se crean las variables chat de tipo mensaje en forma de array y usuario de tipo any
  public chats:Mensaje[]=[];
  public usuario: any = {};
//se cargan los servicios de firebase
  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user =>{
      console.log('Estado del usuario: ', user);

      if (!user) {
          return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })
  }
//Inicia sesión
  login(proveedor:string) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  //Finaliza la sesión del usuario
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

//Carga lso mensajes desde Firebase y los retorna
  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy('fecha','desc')
                                                                        .limit(5));

    return this.itemsCollection.valueChanges()
                              .map((mensajes: Mensaje[])=>{
                                console.log(mensajes);
                                this.chats = [];
                                for (let mensaje of mensajes) {
                                    this.chats.unshift(mensaje);
                                }
                                return this.chats;
                                //this.chats = mensajes;
                              })
  }

//Agrega mensaje y lo agrega a la base de dato
  agregarMensaje(texto:string){
    let mensaje: Mensaje={
      nombre: 'LuisDemo',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add(mensaje);
  }

}
