import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
    selector: 'page-sugestao',
    templateUrl: 'sugestao.html'
})
export class SugestaoPage {
    nome='';
    from='';
    mensagem='';
    constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer) {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SugestaoPage');
    }
    send(){
        console.log("cheguei no send");
        let corpo_mensagem = 'Olá, \n\nMe chamo ' + this.nome + ' e meu email preferencial para contato é ' + this.from + ' . \n\nTenho a seguinte sugestão para vocês:\n' + this.mensagem
        let email = {
            to: 'devmob.ufrj@gmail.com',
            cc:[],
            bcc:[],
            attachment:[],
            subject: 'Sugestão - Minerva Pocket',
            body: corpo_mensagem,
            isHtml: false
        }
        this.emailComposer.open(email);
    }
}