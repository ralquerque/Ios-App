import { Component, Injectable } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { LoginProvider } from '../pages/login-provider/loginProvider';

@Component({
  templateUrl: 'app.html'
  
  // templateUrl: 'login.html'
})
export class MyApp {


  //rootPage:any = TabsPage;
  logeo: boolean = false;


  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

   

      /*
        if(this.logeo){
      
          this.rootPage = HomePage;
         
      }*/

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }









}
