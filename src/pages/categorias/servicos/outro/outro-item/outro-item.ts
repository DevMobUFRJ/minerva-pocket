import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-outro-item',
  templateUrl: 'outro-item.html'
})
export class OutroItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Serviço", detalhe: this.item[0].servico },
      { titulo: "Observação", detalhe: this.item[0].observacao },
      { titulo: "Descrição", detalhe: this.item[0].descricao },
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
    console.log('ionViewDidLoad OutroItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
