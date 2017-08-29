import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {BdService} from  '../../../../app/services/bd.service';

@Component({
  selector: 'page-bebedouro',
  templateUrl: 'bebedouro.html'
})
export class BebedouroPage {

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bdService: BdService) {
  }
}
