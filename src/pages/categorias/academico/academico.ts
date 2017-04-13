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
      {titulo:'Bibliotecas', imagem:'assets/images/academico/biblioteca.jpg', page:''},
      {titulo:'CAs & DAs', imagem:'assets/images/academico/ca.jpg', page:''},
      {titulo:'Auditórios', imagem:'assets/images/academico/auditorio.jpg', page:''},
      {titulo:'Secretarias', imagem:'assets/images/academico/secretaria.jpg', page:''},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
}
