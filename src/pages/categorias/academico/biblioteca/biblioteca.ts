import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';
import {BibliotecaItemPage} from './biblioteca-item/biblioteca-item';

@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html'
})
export class BibliotecaPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecaPage');
  }

  ngOnInit(){
    this.getAcademicoData();
    console.log('foi...')
  }

  getAcademicoData(){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['1'];
    });
  }

  viewItem(item){
    this.navCtrl.push(BibliotecaItemPage, {item:item})
  }

  doRefresh(refresher){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['1'];

      if(refresher != 0)
        refresher.complete();
    });
  }
}
