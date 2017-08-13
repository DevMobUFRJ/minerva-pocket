import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuditorioPage } from '../academico/auditorio/auditorio';
import { BibliotecaPage } from '../academico/biblioteca/biblioteca';
import { CaDaPage } from '../academico/cada/cada';
import { SecretariaPage } from '../academico/secretaria/secretaria';

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
  auditorioPage   = AuditorioPage;
  bibliotecaPage  = BibliotecaPage;
  cadaPage        = CaDaPage;
  secretariaPage  = SecretariaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Bibliotecas', imagem:'assets/images/academico/biblioteca.jpg', page:this.bibliotecaPage},
      {titulo:'CAs & DAs', imagem:'assets/images/academico/ca.jpg', page:this.cadaPage},
      {titulo:'Auditórios', imagem:'assets/images/academico/auditorio.jpg', page:this.auditorioPage},
      {titulo:'Secretarias', imagem:'assets/images/academico/secretaria.jpg', page:this.secretariaPage},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcademicoPage');
  }
}
