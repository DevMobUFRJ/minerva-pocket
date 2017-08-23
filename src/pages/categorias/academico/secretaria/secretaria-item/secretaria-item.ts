import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-secretaria-item',
  templateUrl: 'secretaria-item.html'
})
export class SecretariaItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecretariaItemPage');
  }

  toggleDetails(data) {

  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
