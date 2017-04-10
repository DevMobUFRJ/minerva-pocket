import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-xerox-grafica-item',
  templateUrl: 'xerox-grafica-item.html'
})
export class XeroxGraficaItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XeroxGraficaItemPage');
  }

  toggleDetails(data) {

  }
}
