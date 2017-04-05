import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriasPage } from '../pages/categorias/categorias';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { TabsPage } from '../pages/tabs/tabs';

import { ServicosPage } from '../pages/categorias/servicos/servicos';

import { AlimentacaoPage } from '../pages/categorias/alimentacao/alimentacao';
import { AlimentacaoListPage } from '../pages/categorias/alimentacao/alimentacao-list/alimentacao-list';
import { AlimentacaoItemPage } from '../pages/categorias/alimentacao/alimentacao-list/alimentacao-item/alimentacao-item';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = AlimentacaoItemPage;
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
      { title: 'AlimentacaoList', component: AlimentacaoListPage },
      { title: 'AlimentacaoItem', component: AlimentacaoItemPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
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
