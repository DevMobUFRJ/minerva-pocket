import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {OutroItemPage} from './outro-item/outro-item';

@Component({
  selector: 'page-outro',
  templateUrl: 'outro.html'
})
export class OutroPage {

  items:any;
  result: any;
  searchTerm: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutroPage');
  }

  ionViewDidEnter() {
    this.getServicoData();
    this.setFilteredItems();
  }

  ngOnInit(){
    this.getServicoData();
  }

  setFilteredItems() {
    if (!this.searchTerm) {
      this.items = this.result;
    } else {
      this.items = this.bdService.filterItems(this.result, this.searchTerm);
    }
  }

  getServicoData(){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['2'];
      this.result = response['2'];
    });
  }

  viewItem(item){
    this.navCtrl.push(OutroItemPage, {item:item});
    console.log(item)
    
  }

  doRefresh(refresher){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['2'];
      this.result = response['2'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
