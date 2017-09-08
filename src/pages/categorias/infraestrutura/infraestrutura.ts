import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BanheiroPage } from '../infraestrutura/banheiro/banheiro';
import { BebedouroPage } from '../infraestrutura/bebedouro/bebedouro';
import { EstacionamentoPage } from '../infraestrutura/estacionamento/estacionamento';
import { BicicletarioPage } from '../infraestrutura/bicicletario/bicicletario';


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
  bicicletarioPage=BicicletarioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Banheiros', page:this.banheiroPage, name:'ios-bulb', id: 'fundo1', class:'corrigeBanheiro'},
      {titulo:'Bebedouros', page:this.bebedouroPage, name:'md-pint', id: 'fundo2'},
      {titulo:'Estacionamentos', page:this.estacionamentoPage, name:'md-car', id: 'fundo3'},
      {titulo:'Bicicletários', page:this.bicicletarioPage, name:'md-bicycle', id: 'fundo4'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfraestruturaPage');
  }
}
