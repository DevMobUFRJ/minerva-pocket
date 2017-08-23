import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alimentacao-item',
  templateUrl: 'alimentacao-item.html'
})
export class AlimentacaoItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoItemPage');
  }

  toggleDetails(data) {

  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
