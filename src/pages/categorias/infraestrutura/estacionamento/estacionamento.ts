import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BdService } from '../../../../app/services/bd.service';
import { EstacionamentoItemPage } from './estacionamento-item/estacionamento-item';

@Component({
  selector: 'page-estacionamento',
  templateUrl: 'estacionamento.html'
})
export class EstacionamentoPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionamentoPage');
  }

  ngOnInit() {
    this.getInfraestruturaData();
    console.log('foi...')
  }

  getInfraestruturaData() {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['2'];
    });
  }

  viewItem(item) {
    this.navCtrl.push(EstacionamentoItemPage, { item: item })
  }

  doRefresh(refresher) {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['2'];

      if (refresher != 0)
        refresher.complete();
    });
  }

}
