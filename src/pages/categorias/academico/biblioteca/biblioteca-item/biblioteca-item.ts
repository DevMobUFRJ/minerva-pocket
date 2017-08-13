import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-biblioteca-item',
  templateUrl: 'biblioteca-item.html'
})
export class BibliotecaItemPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecaItemPage');
  }

  toggleDetails(data) {

  }
}
