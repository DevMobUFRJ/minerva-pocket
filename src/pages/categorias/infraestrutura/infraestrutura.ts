import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BanheiroPage } from '../infraestrutura/banheiro/banheiro';
import { BebedouroPage } from '../infraestrutura/bebedouro/bebedouro';
import { EstacionamentoPage } from '../infraestrutura/estacionamento/estacionamento';


/*
  Generated class for the Infraestrutura page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-infraestrutura',
  templateUrl: 'infraestrutura.html'
})
export class InfraestruturaPage {

  itensLista: any;
  bebedouroPage=BebedouroPage;
  banheiroPage=BanheiroPage;
  estacionamentoPage=EstacionamentoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Banheiros', imagem:'assets/images/academico/biblioteca.jpg', page:this.banheiroPage, name:'ios-man', id: 'fundo1'},
      {titulo:'Bebedouros', imagem:'assets/images/academico/ca.jpg', page:this.bebedouroPage, name:'md-pint', id: 'fundo2'},
      {titulo:'Estacionamentos', imagem:'assets/images/academico/auditorio.jpg', page:this.estacionamentoPage, name:'md-car', id: 'fundo3'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfraestruturaPage');
  }
}
