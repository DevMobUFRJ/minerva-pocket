import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-outro-item',
  templateUrl: 'outro-item.html'
})
export class OutroItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutroItemPage');
  }

  toggleDetails(data) {

  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
