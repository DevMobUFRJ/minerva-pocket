import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BdService } from '../../app/services/bd.service';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-navegar',
  templateUrl: 'navegar.html'
})
export class NavegarPage {

  alimentacao: any;
  xerox: any;
  banco: any;
  biblioteca: any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private bdService: BdService, 
              private sanitizer: DomSanitizer,
              private alertCtrl: AlertController
            ) {
  }

  ngOnInit() {
    this.getAlimentacaoData();
    this.getBancoData();
    this.getBibliotecaData();
    this.getXeroxData();

    console.log('foi...')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavegarPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Navegar',
      subTitle: 'Essa seção é destinada aos comércios e serviços mais buscados no campus da Cidade Universitária',
      buttons: ['Entendi!']
    });
    alert.present();
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  toNumber(LocArray: any) {
    return parseFloat(LocArray);
  }

  getAlimentacaoData() {
    this.bdService.getAlimentacaoData().subscribe(response => {
      this.alimentacao = response;
    });
  }

  getBancoData() {
    this.bdService.getServicoData().subscribe(response => {
      this.banco = response['0'];
    });
  }

  getBibliotecaData() {
    this.bdService.getAcademicoData().subscribe(response => {
      this.biblioteca = response['1'];
    });
  }

  getXeroxData() {
    this.bdService.getServicoData().subscribe(response => {
      this.xerox = response['3'];
    });
  }
}
