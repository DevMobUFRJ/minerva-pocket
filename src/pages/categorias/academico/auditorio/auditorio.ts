import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {AuditorioItemPage} from './auditorio-item/auditorio-item';

@Component({
  selector: 'page-auditorio',
  templateUrl: 'auditorio.html'
})
export class AuditorioPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditorioPage');
  }

  ngOnInit(){
    this.getAcademicoData();
    console.log('foi...')
  }

  getAcademicoData(){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['3'];
    });
  }

  viewItem(item){
    this.navCtrl.push(AuditorioItemPage, {item:item});
    console.log(item);
  }

  doRefresh(refresher){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['3'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
