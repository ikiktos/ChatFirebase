import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  message: string;
  username: string;
  messageArr: any;
  messages: object[] = [];


  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.username = this.navParams.get('username');
    this.messageArr = this.db.list<Item>('/chat').valueChanges().subscribe(data => {
     this.messages = data;
    })
  }

  ionViewDidLoad() {

  }

  messageForm() {
    if (this.message != null) {
      console.log(this.message);
      this.db.list('/chat').push({
        username: this.username,
        message: this.message
      });
      this.message = null;

      console.log('ionViewDidLoad ChatPage');
    }
  }
}
