import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {MuseuItemPage} from './museu-item/museu-item';

@Component({
  selector: 'page-museu',
  templateUrl: 'museu.html'
})
export class MuseuPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuseuPage');
  }

  ngOnInit(){
    this.getAcademicoData();
    console.log('foi...')
  }

  getAcademicoData(){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['4'];
    });
  }

  viewItem(item){
    this.navCtrl.push(MuseuItemPage, {item:item});
    console.log(item);
  }

  doRefresh(refresher){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['4'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
