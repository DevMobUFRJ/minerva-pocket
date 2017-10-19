import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-interno-item',
  templateUrl: 'interno-item.html'
})
export class InternoItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Tipo", detalhe: this.item[0].tipo },
      { titulo: "Funcionamento", detalhe: this.item[0].funcionamento },
      { titulo: "Observações", detalhe: this.item[0].observacao },
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
    console.log('ionViewDidLoad InternoItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
