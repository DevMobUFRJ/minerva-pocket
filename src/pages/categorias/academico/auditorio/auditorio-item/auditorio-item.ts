import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-auditorio-item',
  templateUrl: 'auditorio-item.html'
})
export class AuditorioItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditorioItemPage');
  }

  toggleDetails(data) {

  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
