import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import { BebedouroItemPage } from './bebedouro-item/bebedouro-item';

@Component({
  selector: 'page-bebedouro',
  templateUrl: 'bebedouro.html'
})
export class BebedouroPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BebedouroPage');
  }

  ngOnInit() {
    this.getInfraestruturaData();
    console.log('foi...')
  }

  getInfraestruturaData() {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['1'];
    });
  }

  viewItem(item) {
    this.navCtrl.push(BebedouroItemPage, { item: item })
  }

  doRefresh(refresher) {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['1'];

      if (refresher != 0)
        refresher.complete();
    });
  }

}
