import { ExternoItemPage } from './externo/externo-item/externo-item';
import { InternoItemPage } from './interno/interno-item/interno-item';
import { BdService } from './../../../app/services/bd.service';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-transporte',
  templateUrl: 'transporte.html'
})

export class TransportePage {

  items: any;
  pontos: any;
  category: string = 'Interno';

  Transporte:any = {
    'Interno': [],
    'Externo': []
  
  };

  constructor(public navCtrl: NavController, private bdService: BdService) {
  }

  isInterno(category){
    if (category=="Interno")
      return true;
    else
      return false;
  }
  ngOnInit() {
    this.getTransporteData(this.category);
  }

  getTransporteData(category) {

    this.bdService.getTransporteData().subscribe(response => {
      this.Transporte.Interno = response['0'];
      this.Transporte.Externo = response['1'];
    });

    if (this.isInterno(category))
      console.log(this.Transporte.Interno['0']);
    else
      console.log(this.Transporte.Externo['0']);

  }

  viewItem(category, item){
    if (category == "Interno") {
      console.log("to interno");
      console.log(item);
      this.navCtrl.push(InternoItemPage, {item:item})
    }
    else if (category == "Externo"){
      console.log("to externo");
      console.log(item);
      this.navCtrl.push(ExternoItemPage, { item: item })
    }
    
  }

  doRefresh(category, refresher) {
    console.log(category);
    if (category == "Interno") {
      this.bdService.getTransporteData().subscribe(response => {
        this.Transporte.Interno = response['0'];
        this.Transporte.Externo = response['1'];

        if (refresher != 0)
          refresher.complete();
      });
    
    } else if (category == "Externo"){
      this.bdService.getTransporteData().subscribe(response => {
        this.Transporte.Interno = response['0'];
        this.Transporte.Externo = response['1'];
        
        if (refresher != 0)
        refresher.complete();
      });

    }
  }    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportePage');
  }
  
}
