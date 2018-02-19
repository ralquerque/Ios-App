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

    this.storage.get('nombre').then((val) => {
      console.log('nombre provider ', val);
      this.nombre = val;
    });



    this.storage.get('clave').then((val) => {
      console.log('clave provider ', val);
      this.clave = val;
    });

  }
  
  public login(username: string, password: string) {
    let data = { success: 0 };

    console.log("provider login ", username, password);


    console.log("provider login ", username, password);

    console.log(username , this.nombre);
    console.log("son iguales los nombres ",username === this.nombre);

    if (password !== this.clave || username !== this.nombre || typeof password === 'undefined' || typeof username === 'undefined') {
      data.success = 0;
    }

    if (password === this.clave  && username === this.nombre  ){
      data.success = 1;
    }


    return Observable.from([data]);

  }
}