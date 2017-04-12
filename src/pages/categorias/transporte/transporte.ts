import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Internos', imagem:'assets/images/transporte/interno.jpg', page:''},
      {titulo:'Externos', imagem:'assets/images/transporte/externo.jpg', page:''}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
}
