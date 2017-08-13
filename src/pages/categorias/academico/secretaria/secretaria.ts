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

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecretariaPage');
  }

  ngOnInit(){
    this.getAcademicoData();
    console.log('foi...')
  }

  getAcademicoData(){
    this.bdService.getAcademicoData().subscribe(response => {
      this.items = response['2'];
    });
  }

  viewItem(item){
    this.navCtrl.push(SecretariaItemPage, {item:item})
  }
}
