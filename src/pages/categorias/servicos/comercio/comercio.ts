import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {ComercioItemPage} from './comercio-item/comercio-item';

@Component({
  selector: 'page-comercio',
  templateUrl: 'comercio.html'
})
export class ComercioPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComercioPage');
  }

  ngOnInit(){
    this.getServicoData();
    console.log('foi...')
  }

  getServicoData(){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['1'];
    });
  }

  viewItem(item){
    this.navCtrl.push(ComercioItemPage, {item:item})
  }

  doRefresh(refresher){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['1'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
