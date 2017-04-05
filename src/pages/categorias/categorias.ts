import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicosPage } from '../categorias/servicos/servicos';
import { AlimentacaoPage } from '../categorias/alimentacao/alimentacao';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }
}
