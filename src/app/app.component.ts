import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriasPage } from '../pages/categorias/categorias';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { TabsPage } from '../pages/tabs/tabs';

import { ServicosPage } from '../pages/categorias/servicos/servicos';

import { AlimentacaoPage } from '../pages/categorias/alimentacao/alimentacao';
import { AlimentacaoItemPage } from '../pages/categorias/alimentacao/alimentacao-item/alimentacao-item';

import { XeroxGraficaPage } from '../pages/categorias/servicos/xerox-grafica/xerox-grafica';
import { XeroxGraficaItemPage } from '../pages/categorias/servicos/xerox-grafica/xerox-grafica-item/xerox-grafica-item';

import { TransportePage } from '../pages/categorias/transporte/transporte';

import { AcademicoPage } from '../pages/categorias/academico/academico';

import { BdService } from './services/bd.service';

@Component({
  templateUrl: 'app.html',
    providers:[BdService]
  })

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Categorias', component: CategoriasPage },
      { title: 'Favoritos', component: FavoritosPage },

      { title: 'Servicos', component: ServicosPage },

      { title: 'Alimentacao', component: AlimentacaoPage },
      { title: 'AlimentacaoItem', component: AlimentacaoItemPage },

      { title: 'XeroxGrafica', component: XeroxGraficaPage },
      { title: 'XeroxGraficaItem', component: XeroxGraficaItemPage },

      { title: 'TransportePage', component: TransportePage },

      { title: 'AcademicoPage', component: AcademicoPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#01994a');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
