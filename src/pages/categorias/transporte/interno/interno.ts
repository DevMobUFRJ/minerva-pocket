import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {InternoItemPage} from './interno-item/interno-item';

@Component({
  selector: 'page-interno',
  templateUrl: 'interno.html'
})
export class InternoPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternoPage');
  }

  ngOnInit(){
    this.getTransporteData();
    console.log('foi...')
  }

  getTransporteData(){
    this.bdService.getTransporteData().subscribe(response => {
      this.items = response['0'];
    });
  }

  viewItem(item){
    this.navCtrl.push(InternoItemPage, {item:item})
  }
}
