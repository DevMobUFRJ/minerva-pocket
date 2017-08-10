import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-externo-item',
  templateUrl: 'externo-item.html'
})
export class ExternoItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExternoItemPage');
  }

  toggleDetails(data) {

  }
}
