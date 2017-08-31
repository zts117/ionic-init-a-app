import { Component } from "@angular/core";

import {
  App,
  NavController,
  ModalController,
  ViewController
} from "ionic-angular";

@Component({
  template: `
    <ion-list class="more-list">
      <li ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started')">
        <ion-icon ios="ios-chatbubbles-outline" md="md-chatbubbles-outline"></ion-icon> &nbsp;创建群聊
      </li>
      <li ion-item (click)="close('http://ionicframework.com/docs/v2')">
        <ion-icon ios="ios-person-add-outline" md="md-person-add-outline"></ion-icon> &nbsp;加好友/群
      </li>
      <li ion-item (click)="close('http://showcase.ionicframework.com')">
        <ion-icon ios="ios-qr-scanner" md="md-qr-scanner"></ion-icon> &nbsp;扫一扫
      </li>
      <li ion-item (click)="close('https://github.com/ionic-team/ionic')">
        <ion-icon ios="ios-folder-outline" md="md-folder-outline"></ion-icon> &nbsp;面对面快传
      </li>
      <li ion-item (click)="support()">
        <ion-icon ios="ios-card" md="md-card"></ion-icon> &nbsp;付款
      </li>
      <li ion-item (click)="support()">
        <ion-icon ios="ios-camera-outline" md="md-camera-outline"></ion-icon> &nbsp;拍照
      </li>
      <li ion-item (click)="support()">
        <ion-icon ios="ios-clipboard-outline" md="md-clipboard-outline"></ion-icon> &nbsp;面对面红包
      </li>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) {}

  support() {
    this.app.getRootNav().push("SupportPage");
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, "_blank");
    this.viewCtrl.dismiss();
  }
}
