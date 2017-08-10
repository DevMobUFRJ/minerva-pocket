import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {InternoPage} from '../transporte/interno/interno';
import {ExternoPage} from '../transporte/externo/externo';


/*
  Generated class for the Transporte page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transporte',
  templateUrl: 'transporte.html'
})
export class TransportePage {
  itensLista: any;

  internoPage     = InternoPage;
  externoPage     = ExternoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Internos', imagem:'assets/images/transporte/interno.jpg', page:InternoPage},
      {titulo:'Externos', imagem:'assets/images/transporte/externo.jpg', page:this.externoPage}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
}
