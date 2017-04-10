import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {XeroxGraficaPage} from '../servicos/xerox-grafica/xerox-grafica';

/*
  Generated class for the Servicos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html'
})
export class ServicosPage {

    xeroxgraficaPage=XeroxGraficaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }
}
