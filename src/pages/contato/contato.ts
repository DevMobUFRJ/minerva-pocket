import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-contato',
    templateUrl: 'contato.html'
})
export class ContatoPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ContatoPage');
    }
}