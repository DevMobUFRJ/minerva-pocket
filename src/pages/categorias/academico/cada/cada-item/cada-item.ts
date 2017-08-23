import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cada-item',
  templateUrl: 'cada-item.html'
})
export class CaDaItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaDaItemPage');
  }

  toggleDetails(data) {

  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
