import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BdService } from '../../../../app/services/bd.service';
import { BicicletarioItemPage } from './bicicletario-item/bicicletario-item';

@Component({
  selector: 'page-bicicletario',
  templateUrl: 'bicicletario.html'
})
export class BicicletarioPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BicicletarioPage');
  }

  ngOnInit() {
    this.getInfraestruturaData();
    console.log('foi...')
  }

  getInfraestruturaData() {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['3'];
    });
  }

  viewItem(item) {
    this.navCtrl.push(BicicletarioItemPage, { item: item })
  }

  doRefresh(refresher) {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['3'];

      if (refresher != 0)
        refresher.complete();
    });
  }

}
