import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-sugestao',
    templateUrl: 'sugestao.html'
})
export class SugestaoPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SugestaoPage');
    }
}