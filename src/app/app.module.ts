import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ToastController  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage} from '../pages/chat/chat';
import {AngularFireDatabaseModule} from 'angularfire2/database';


let config = {
  apiKey: "AIzaSyBHdg_RZh8p3hEu08r8ss9_rdS_uAqbmJQ",
  authDomain: "chat-5ca64.firebaseapp.com",
  databaseURL: "https://chat-5ca64.firebaseio.com",
  projectId: "chat-5ca64",
  storageBucket: "chat-5ca64.appspot.com",
  messagingSenderId: "391043354273"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config, 'chat'),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    ToastController,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
