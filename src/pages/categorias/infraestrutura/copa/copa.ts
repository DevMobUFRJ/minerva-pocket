import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BdService } from '../../../../app/services/bd.service';
import { CopaItemPage } from './copa-item/copa-item';

@Component({
  selector: 'page-copa',
  templateUrl: 'copa.html'
})
export class CopaPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CopaPage');
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
    this.navCtrl.push(CopaItemPage, { item: item })
  }

  doRefresh(refresher) {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['3'];

      if (refresher != 0)
        refresher.complete();
    });
  }

}
