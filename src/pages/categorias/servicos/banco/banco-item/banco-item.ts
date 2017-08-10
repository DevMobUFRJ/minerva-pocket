import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-banco-item',
  templateUrl: 'banco-item.html'
})
export class BancoItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BancoItemPage');
  }

  toggleDetails(data) {

  }
}
