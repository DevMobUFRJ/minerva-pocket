import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../app/services/bd.service';
import {AlimentacaoItemPage} from './alimentacao-item/alimentacao-item';

@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html'
})
export class AlimentacaoPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');
  }

  ngOnInit(){
    this.getData();
    console.log('foi...')
  }

  getData(){
    this.bdService.getData().subscribe(response => {
      this.items = response.data.alimentacao;
    });
  }

  viewItem(item){
    this.navCtrl.push(AlimentacaoItemPage, {item:item})
  }
}
