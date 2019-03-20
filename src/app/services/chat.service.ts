import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    private itemsCollection: AngularFirestoreCollection<Mensaje>;

    public chats:Mensaje[]=[];



    public usuario:any={};



  constructor( private afs: AngularFirestore,
                public afAuth: AngularFireAuth ) {

    this.afAuth.authState.subscribe( user=>{
        console.log('Estado del usuario', user);
        if (!user) {
            return;
        }else{

            this.usuario.nombre = user.displayName;
            this.usuario.uid = user.uid;
        }
    } )
                 }


    login( proveedor:string) {
        if(proveedor === 'google'){
            this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

        }else{
            this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
        }
    }


    logout() {
        this.usuario={};
        this.afAuth.auth.signOut();
    }

  cargarMensajes(){
      this.itemsCollection = this.afs.collection<Mensaje>('chats',
        ref=>ref.orderBy('fecha', 'desc')
        .limit(5));

      return this.itemsCollection.valueChanges()
        .pipe(map( (mensajes: Mensaje[]) =>{
            console.log(mensajes);


            this.chats=[];

            for(let mensaje of mensajes){
                this.chats.unshift(mensaje);
            }

            return this.chats;
            //this.chats = mensajes;
        }))

  }



  agregarmensaje( texto:string ){
      let mensaje:Mensaje={
          nombre: this.usuario.nombre,
          mensaje: texto,
          fecha: new Date().getTime(),
          uid: this.usuario.uid
      }


      return this.itemsCollection.add( mensaje );
  }


}
