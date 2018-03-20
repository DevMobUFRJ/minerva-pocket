import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-banco-item',
  templateUrl: 'banco-item.html'
})
export class BancoItemPage {

  item:any;
  shownGroup = null;
  detalhes: Array<{ titulo: string, detalhe: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.item = navParams.get('item');
    this.detalhes = [
      { titulo: "Serviço", detalhe: this.item[0].tipo },
      { titulo: "Bandeira", detalhe: this.item[0].bandeira },
      { titulo: "Funcionamento", detalhe: this.item[0].funcionamento }
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
    console.log('ionViewDidLoad BancoItemPage');
  }

  toNumber( LocArray:any ){
    return parseFloat(LocArray);
  }
}
