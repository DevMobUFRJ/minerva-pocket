import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {XeroxGraficaItemPage} from './xerox-grafica-item/xerox-grafica-item';

@Component({
  selector: 'page-xerox-grafica',
  templateUrl: 'xerox-grafica.html'
})
export class XeroxGraficaPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XeroxGraficaPage');
  }

  ngOnInit(){
    this.getServicoData();
    console.log('foi...')
  }

  getServicoData(){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['3'];
    });
  }

  viewItem(item){
    this.navCtrl.push(XeroxGraficaItemPage, {item:item})
  }

  doRefresh(refresher){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['3'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
