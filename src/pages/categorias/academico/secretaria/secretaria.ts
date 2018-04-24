import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {SecretariaItemPage} from './secretaria-item/secretaria-item';

@Component({
  selector: 'page-secretaria',
  templateUrl: 'secretaria.html'
})
export class SecretariaPage {

  items:any;
  result: any;
  searchTerm: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidEnter() {
    this.getAcademicoData();
    this.setFilteredItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecretariaPage');
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
      this.items = response['2'];
      this.result = response['2'];
    });
  }

  viewItem(item){
    this.navCtrl.push(SecretariaItemPage, {item:item});
    console.log(item);
  }

  doRefresh(refresher){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['2'];
      this.result = response['2'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
