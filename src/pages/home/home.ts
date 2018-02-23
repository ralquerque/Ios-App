import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre: string ;
  clave: string ;
  constructor(public navCtrl: NavController , public navParams: NavParams) {
    console.log("HomePage "+navParams.get("nombre"));
    this.nombre =  navParams.get("nombre");
    this.clave =  navParams.get("clave");
  }
  
   
}
