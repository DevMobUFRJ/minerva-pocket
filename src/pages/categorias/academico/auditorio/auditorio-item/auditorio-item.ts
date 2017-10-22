import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-auditorio-item',
  templateUrl: 'auditorio-item.html'
})
export class AuditorioItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Centro", detalhe: this.item.localizacao[0].centro },
      { titulo: "Contato", detalhe: this.item.contato },
      { titulo: "Funcionamento", detalhe: this.item.funcionamento },
      { titulo: "Observações", detalhe: this.item.observacao },
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
    console.log('ionViewDidLoad AuditorioItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
