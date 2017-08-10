import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {XeroxGraficaPage} from '../servicos/xerox-grafica/xerox-grafica';
import {BancoPage} from '../servicos/banco/banco';
import {ComercioPage} from '../servicos/comercio/comercio';
import {OutroPage} from '../servicos/outro/outro';

/*
  Generated class for the Servicos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html'
})
export class ServicosPage {
  itensLista: any;

  xeroxgraficaPage = XeroxGraficaPage;
  bancoPage        = BancoPage;
  comercioPage     = ComercioPage;
  outroPage        = OutroPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itensLista = [
      {titulo:'Xerox e Gráficas', imagem:'assets/images/servicos/xerox.jpg', page: this.xeroxgraficaPage},
      {titulo:'Bancos', imagem:'assets/images/servicos/banco.jpg', page: this.bancoPage},
      {titulo:'Comércio', imagem:'assets/images/servicos/comercio.jpg', page: this.comercioPage},
      {titulo:'Outros', imagem:'assets/images/servicos/outros.jpg', page: this.outroPage},

    ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }
}
