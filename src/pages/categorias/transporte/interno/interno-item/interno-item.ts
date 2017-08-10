import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-interno-item',
  templateUrl: 'interno-item.html'
})
export class InternoItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternoItemPage');
  }

  toggleDetails(data) {

  }
}
