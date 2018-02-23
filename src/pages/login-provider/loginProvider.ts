import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
//import 'rxjs/Observable/from';
import { Storage } from '@ionic/storage';

@Injectable()
export class LoginProvider {
  nombre: string;
  clave: string;

  constructor(private storage: Storage) {
    this.storage.ready().then((valor) => {
      console.log("ready");
      this.storage.get('nombre').then((val) => {
        this.nombre = val;
      });



      this.storage.get('clave').then((val) => {
        this.clave = val;
      });
    });

  }

  public login(username: string, password: string) {
    console.log("metodo Login Provider");

    let data = { success: 0 };

    if (password !== this.clave || username !== this.nombre || typeof password === 'undefined' || typeof username === 'undefined') {
      data.success = 0;
    }

    if (password === this.clave && username === this.nombre) {
      data.success = 1;
    }


    return Observable.from([data]);

  }

  public verificar() {

    console.log("verificar Provider");
    let dato = { success: 0, nombre: "", clave: "" };
    
    if (this.nombre.length > 0 && this.clave.length > 0) {

      dato.success = 0;

    } else {

      this.storage.set('nombre', 'admin').then(() => {

        console.log("nombre por defecto admin");
      });;
      this.storage.set('clave', 'admin').then(() => {

        console.log("clave por defecto admin");
      });

      dato.success = 1;
      dato.nombre = "admin";
      dato.clave = "admin";
    }
    return Observable.from([dato]);
  }
}