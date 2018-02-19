import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string ;
  password: string ;
  constructor(public navCtrl: NavController , public navParams: NavParams) {
    console.log("HomePage "+navParams.get("nombre"));
    this.username =  navParams.get("nombre");
    this.password =  navParams.get("clave");
  }
  
   
}
