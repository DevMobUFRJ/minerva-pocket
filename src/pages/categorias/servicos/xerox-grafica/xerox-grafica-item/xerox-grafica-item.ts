import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-xerox-grafica-item',
  templateUrl: 'xerox-grafica-item.html'
})
export class XeroxGraficaItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Serviço", detalhe: this.item[0].tipo },
      { titulo: "Observação", detalhe: this.item[0].observacao },
      { titulo: "Funcionamento", detalhe: this.item[0].funcionamento }
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
    console.log('ionViewDidLoad XeroxGraficaItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
