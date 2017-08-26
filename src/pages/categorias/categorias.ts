import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { ServicosPage } from '../categorias/servicos/servicos';
import { AlimentacaoPage } from '../categorias/alimentacao/alimentacao';
import { TransportePage } from '../categorias/transporte/transporte';
import { AcademicoPage } from '../categorias/academico/academico';

import { Network } from '@ionic-native/network'
/*
  Generated class for the Todos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage {

  servicosPage=ServicosPage;
  alimentacaoPage=AlimentacaoPage;
  transportePage=TransportePage;
  academicoPage=AcademicoPage;

  constructor(private platform:Platform, private toast:ToastController, private network:Network, public navCtrl: NavController, public navParams: NavParams) {
  }

  checkNetwork() {
       this.platform.ready().then(() => {
           var networkState = navigator.network.type;
           var states = {};
           states[Connection.UNKNOWN]  = 'Unknown connection';
           states[Connection.ETHERNET] = 'Ethernet connection';
           states[Connection.WIFI]     = 'WiFi connection';
           states[Connection.CELL_2G]  = 'Cell 2G connection';
           states[Connection.CELL_3G]  = 'Cell 3G connection';
           states[Connection.CELL_4G]  = 'Cell 4G connection';
           states[Connection.CELL]     = 'Cell generic connection';
           states[Connection.NONE]     = 'No network connection';
           this.displayNetworkUpdate(networkState)
       });
   }

  displayNetworkUpdate(connectionState:string){
    this.toast.create({
      message:`Você está ${connectionState}`,
      duration:3000
    }).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
    this.network.onConnect().subscribe(data=>{
      console.log(data)
      this.displayNetworkUpdate(data.type)
    }), error => console.error(error);
    this.network.onDisconnect().subscribe(data=>{
      console.log(data)
      this.displayNetworkUpdate(data.type)
    }), error => console.error(error);
  }
}
