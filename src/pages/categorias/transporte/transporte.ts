import { Component } from '@angular/core';
import {InternoPage} from '../transporte/interno/interno';
import {ExternoPage} from '../transporte/externo/externo';

@Component({
  selector: 'page-transporte',
  templateUrl: 'transporte.html'
})
export class TransportePage {
  itensLista: any;

  internoPage: any;
  externoPage: any;

  constructor() {
    this.internoPage = InternoPage;
    this.externoPage = ExternoPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
  
}
