import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {BancoItemPage} from './banco-item/banco-item';

@Component({
  selector: 'page-banco',
  templateUrl: 'banco.html'
})
export class BancoPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BancoPage');
  }

  ngOnInit(){
    this.getServicoData();
    console.log('foi...')
  }

  getServicoData(){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['0'];
    });
  }

  viewItem(item){
    this.navCtrl.push(BancoItemPage, {item:item})
  }

  doRefresh(refresher){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['0'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
