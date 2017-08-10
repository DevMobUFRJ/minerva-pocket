import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comercio-item',
  templateUrl: 'comercio-item.html'
})
export class ComercioItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComercioItemPage');
  }

  toggleDetails(data) {

  }
}
