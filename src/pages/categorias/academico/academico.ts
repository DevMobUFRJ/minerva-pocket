import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Academico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-academico',
  templateUrl: 'academico.html'
})
export class AcademicoPage {
  itensLista: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Bibliotecas', imagem:'assets/images/transporte/interno.jpg', page:''},
      {titulo:'CAs & DAs', imagem:'assets/images/transporte/interno.jpg', page:''},
      {titulo:'Auditórios', imagem:'assets/images/transporte/interno.jpg', page:''},
      {titulo:'Secretarias', imagem:'assets/images/transporte/interno.jpg', page:''},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
}
