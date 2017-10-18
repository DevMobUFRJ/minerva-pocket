import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alimentacao-item',
  templateUrl: 'alimentacao-item.html'
})
export class AlimentacaoItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
        this.detalhes = [
          { titulo: "Tipo de Comida", detalhe: this.item[0].tipo_de_comida },
          { titulo: "Preços", detalhe: this.item[0].preco },
          { titulo: "Pagamento", detalhe: this.item[0].tipo_de_pagamento },
          { titulo: "Funcionamento", detalhe: this.item[0].funcionamento },
        ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoItemPage');
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
