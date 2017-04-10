import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CategoriasPage } from '../pages/categorias/categorias';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { TabsPage } from '../pages/tabs/tabs';

import { ServicosPage } from '../pages/categorias/servicos/servicos';

import { AlimentacaoPage } from '../pages/categorias/alimentacao/alimentacao';
import { AlimentacaoItemPage } from '../pages/categorias/alimentacao//alimentacao-item/alimentacao-item';

import { XeroxGraficaPage } from '../pages/categorias/servicos/xerox-grafica/xerox-grafica';
import { XeroxGraficaItemPage } from '../pages/categorias/servicos/xerox-grafica/xerox-grafica-item/xerox-grafica-item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoriasPage,
    FavoritosPage,
    TabsPage,

    ServicosPage,

    AlimentacaoPage,
    AlimentacaoItemPage,

    XeroxGraficaPage,
    XeroxGraficaItemPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top',tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriasPage,
    FavoritosPage,
    TabsPage,

    ServicosPage,

    AlimentacaoPage,
    AlimentacaoItemPage,

    XeroxGraficaPage,
    XeroxGraficaItemPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
