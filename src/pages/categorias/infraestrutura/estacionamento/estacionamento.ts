import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';

@Component({
  selector: 'page-estacionamento',
  templateUrl: 'estacionamento.html'
})
export class EstacionamentoPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }
}
