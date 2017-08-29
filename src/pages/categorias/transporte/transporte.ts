import { Component } from '@angular/core';
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

  internoPage = InternoPage;
  externoPage = ExternoPage;

  constructor() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
}
