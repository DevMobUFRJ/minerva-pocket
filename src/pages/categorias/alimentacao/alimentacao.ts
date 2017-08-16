import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../app/services/bd.service';
import {AlimentacaoItemPage} from './alimentacao-item/alimentacao-item';

@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html'
})
export class AlimentacaoPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService, public loadingController: LoadingController) {
    // let loader = this.loadingController.create({
    //       spinner: "ios",
    //       content: "Carregando dados..."
    //     });
    // loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');
  }

  ngOnInit(){
    this.getAlimentacaoData();
    console.log('foi...')
  }

  getAlimentacaoData(){
    this.bdService.getAlimentacaoData().subscribe(response => {
      this.items = response;
    });
    console.log('carregando lugares de alimentacao')
  }

  viewItem(item){
    this.navCtrl.push(AlimentacaoItemPage, {item:item})
  }

  doRefresh(refresher){
    this.bdService.getAlimentacaoData().subscribe(response => {
      this.items = response;

      if(refresher != 0)
         refresher.complete();
    });
  }

}
