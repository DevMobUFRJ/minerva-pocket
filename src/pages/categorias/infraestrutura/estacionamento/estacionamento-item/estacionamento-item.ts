import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-estacionamento-item',
  templateUrl: 'estacionamento-item.html'
})
export class EstacionamentoItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Tipo de Infraestrutura", detalhe: this.item.tipo },
      { titulo: "Detalhes", detalhe: this.item.detalhes },
      { titulo: "Situação", detalhe: this.item.situacao }
    ]
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacionamentoItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
