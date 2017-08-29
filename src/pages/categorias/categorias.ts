import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicosPage } from '../categorias/servicos/servicos';
import { AlimentacaoPage } from '../categorias/alimentacao/alimentacao';
import { TransportePage } from '../categorias/transporte/transporte';
import { AcademicoPage } from '../categorias/academico/academico';
import { InfraestruturaPage } from '../categorias/infraestrutura/infraestrutura';
/*
  Generated class for the Todos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage {

  servicosPage=ServicosPage;
  alimentacaoPage=AlimentacaoPage;
  transportePage=TransportePage;
  academicoPage=AcademicoPage;
  infraestruturaPage=InfraestruturaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }
}
