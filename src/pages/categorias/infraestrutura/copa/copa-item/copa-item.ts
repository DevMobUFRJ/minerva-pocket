import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-copa-item',
  templateUrl: 'copa-item.html'
})
export class CopaItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Centro", detalhe: this.item.localizacao[0].centro },
      { titulo: "Tipo de Infraestrutura", detalhe: this.item.tipo },
      { titulo: "Detalhes", detalhe: this.item.detalhes },
      { titulo: "Situação", detalhe: this.item.situacao }
    ]
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
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
    console.log('ionViewDidLoad CopaItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
