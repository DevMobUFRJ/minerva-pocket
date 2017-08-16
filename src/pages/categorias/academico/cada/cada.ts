import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {CaDaItemPage} from './cada-item/cada-item';

@Component({
  selector: 'page-cada',
  templateUrl: 'cada.html'
})
export class CaDaPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaDaPage');
  }

  ngOnInit(){
    this.getAcademicoData();
    console.log('foi...')
  }

  getAcademicoData(){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['0'];
    });
  }

  viewItem(item){
    this.navCtrl.push(CaDaItemPage, {item:item})
  }

  doRefresh(refresher){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['0'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
