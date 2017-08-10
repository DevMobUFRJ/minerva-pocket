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

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutroPage');
  }

  ngOnInit(){
    this.getServicoData();
    console.log('foi...')
  }

  getServicoData(){
    this.bdService.getServicoData().subscribe(response => {
      this.items = response['2'];
    });
  }

  viewItem(item){
    this.navCtrl.push(OutroItemPage, {item:item})
  }
}
