import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {BanheiroItemPage} from './banheiro-item/banheiro-item';

@Component({
  selector: 'page-banheiro',
  templateUrl: 'banheiro.html'
})
export class BanheiroPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BanheiroPage');
    
  }

  ngOnInit() {
    this.getInfraestruturaData();
    console.log('foi...')
  }

  getInfraestruturaData() {
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['0'];
    });
  }

  viewItem(item){
    this.navCtrl.push(BanheiroItemPage, { item: item })
  }

  doRefresh(refresher){
    this.bdService.getInfraestruturaData().subscribe(response => {
      this.items = response['0'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}

