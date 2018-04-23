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
  result:any;
  searchTerm: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditorioPage');
  }

  ionViewDidEnter() {
    this.getAcademicoData();
    this.setFilteredItems();
  }

  ngOnInit(){
    this.getAcademicoData();
    console.log('foi...')
  }

  setFilteredItems() {
    if (!this.searchTerm) {
      this.items = this.result;
    } else {
      this.items = this.bdService.filterItemsArray(this.result, this.searchTerm);
    }
  }

  getAcademicoData(){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['3'];
      this.result = response['3'];
    });
  }

  viewItem(item){
    this.navCtrl.push(AuditorioItemPage, {item:item});
  }

  doRefresh(refresher){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['3'];
      this.result = response['3'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
