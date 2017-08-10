import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {ExternoItemPage} from './externo-item/externo-item';

@Component({
  selector: 'page-externo',
  templateUrl: 'externo.html'
})
export class ExternoPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExternoPage');
  }

  ngOnInit(){
    this.getTransporteData();
    console.log('foi...')
  }

  getTransporteData(){
    this.bdService.getTransporteData().subscribe(response => {
      this.items = response['1'];
    });
  }

  viewItem(item){
    this.navCtrl.push(ExternoItemPage, {item:item})
  }
}
