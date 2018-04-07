import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {

  }

  loginForm() {
    if (/^[a-zA-Z0-9]+$/.test(this.username) && this.password === '111111') {
      console.log('Go Home');
      this.navCtrl.push(ChatPage, {
        username: this.username
      });
    } else {
        let toast = this.toastCtrl.create({
          message: 'Username or password is not correct, please try again',
          duration: 3000,
          position: 'top'
        });
        toast.present();
    }
  }
}
