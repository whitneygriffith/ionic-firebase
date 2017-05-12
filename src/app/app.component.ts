import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';
import { NgZone } from '@angular/core';

import { HomePage } from '../pages/home/home';

firebase.initializeApp({
apiKey: "AIzaSyBDwQmZRzHilGXSxxNp--qmi9Dsxs7jvU8",
authDomain: "test-d8950.firebaseapp.com",
databaseURL: "https://test-d8950.firebaseio.com",
storageBucket: "test-d8950.appspot.com",
messagingSenderId: "689814534323"
});


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
rootPage: any;
zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        this.zone.run( () => {
      if (!user) {
        this.rootPage = 'login';
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
      });
      });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

