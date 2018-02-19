import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';
import { ActionSheetController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../login-provider/loginProvider';
import { Dialogs } from '@ionic-native/dialogs';
import { Storage } from '@ionic/storage';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: '../login/login.html',
  providers: [LoginProvider]
})
export class LoginPage {


  /*
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }*/
  public nombre: string;
  public clave: string;
  private loginService: LoginProvider;
  public navegador: any;
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public navParams: NavParams, private storage: Storage, private dialogs: Dialogs) {
    this.navegador = navCtrl;

    this.loginService = new LoginProvider(this.storage);
  }



  ionViewDidLoad() {
    /*
        this.storage.get('username').then((val) => {
          console.log('username', val);
          this.username = val;
        });
        this.storage.get('password').then((val) => {
          console.log('password', val);
          this.password = val;
        });
    
        this.loginService.login(this.username, this.password).subscribe((res) => {
    
          console.log(res);
    
          if (res.success) {
    
            //thx mike for hack to remove back btn
            this.navCtrl.setRoot(HomePage,
              {
                username: this.username,
                clave: this.password
              },
              {
                animate: true
              });
    
          } else {
    
            this.navCtrl.setRoot(LoginPage,
              {
                username: "",
                password: ""
              },
              {
                animate: true
              });
    
          }
    
        });*/


    console.log('ionViewDidLoad LoginPage');

    console.log("User logging " + this.nombre + "\n" + this.clave);

  }



  login() {

    let nombre: string;
    let clave: string;

    this.storage.get('nombre').then((val) => {
      console.log('nombre ------- ', val);
      nombre = val;
    });
    this.storage.get('clave').then((val) => {
      console.log('clave ----- ', val);
      clave = val;
    });

    if (nombre === "" || nombre === null || clave === "" || clave === null) {
      console.log("clave por defecto");
      this.navCtrl.setRoot(HomePage,
        {
          nombre: nombre,
          clave: clave
        },
        {
          animate: true
        });

      this.storage.set('nombre', 'admin');
      this.storage.set('clave', 'admin');
    

    } else {


      console.log('paso por aqui');
      
      console.log('metodo login', this.nombre, this.clave);
      this.loginService.login(this.nombre, this.clave).subscribe((res) => {

        console.log(res);

        if (res.success) {

          //thx mike for hack to remove back btn
          this.navCtrl.setRoot(HomePage,
            {
              nombre: this.nombre,
              clave: this.clave
            },
            {
              animate: true
            });

        } else {

          this.dialogs.alert('Hello world')
            .then(() => console.log('Dialog dismissed'))
            .catch(e => console.log('Error displaying dialog', e));

            alert("te equivocaste cara monda");
        }

      });

    }
  }




}
