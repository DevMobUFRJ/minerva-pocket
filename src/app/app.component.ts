import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriasPage } from '../pages/categorias/categorias';
import { NavegarPage } from '../pages/navegar/navegar';
import { TabsPage } from '../pages/tabs/tabs';

import { AlimentacaoPage } from '../pages/categorias/alimentacao/alimentacao';
import { AlimentacaoItemPage } from '../pages/categorias/alimentacao/alimentacao-item/alimentacao-item';

import { ServicosPage } from '../pages/categorias/servicos/servicos';

import { XeroxGraficaPage } from '../pages/categorias/servicos/xerox-grafica/xerox-grafica';
import { XeroxGraficaItemPage } from '../pages/categorias/servicos/xerox-grafica/xerox-grafica-item/xerox-grafica-item';
import { BancoPage } from '../pages/categorias/servicos/banco/banco';
import { BancoItemPage } from '../pages/categorias/servicos/banco/banco-item/banco-item';
import { ComercioPage } from '../pages/categorias/servicos/comercio/comercio';
import { ComercioItemPage } from '../pages/categorias/servicos/comercio/comercio-item/comercio-item';
import { OutroPage } from '../pages/categorias/servicos/outro/outro';
import { OutroItemPage } from '../pages/categorias/servicos/outro/outro-item/outro-item';

import { TransportePage } from '../pages/categorias/transporte/transporte';
import { InternoPage } from '../pages/categorias/transporte/interno/interno';
import { InternoItemPage } from '../pages/categorias/transporte/interno/interno-item/interno-item';
import { ExternoPage } from '../pages/categorias/transporte/externo/externo';
import { ExternoItemPage } from '../pages/categorias/transporte/externo/externo-item/externo-item';

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
      { title: 'Navegar', component: NavegarPage },

      { title: 'Servicos', component: ServicosPage },

      { title: 'Alimentacao', component: AlimentacaoPage },
      { title: 'AlimentacaoItem', component: AlimentacaoItemPage },

      { title: 'XeroxGrafica', component: XeroxGraficaPage },
      { title: 'XeroxGraficaItem', component: XeroxGraficaItemPage },
      { title: 'Banco', component: BancoPage },
      { title: 'BancoItem', component: BancoItemPage },
      { title: 'Comercio', component: ComercioPage },
      { title: 'ComercioItem', component: ComercioItemPage },
      { title: 'Outro', component: OutroPage },
      { title: 'OutroItem', component: OutroItemPage },

      { title: 'TransportePage', component: TransportePage },
      { title: 'ExternoPage', component: ExternoPage },
      { title: 'ExternoItemPage', component: ExternoItemPage },
      { title: 'InternoPage', component: InternoPage },
      { title: 'InternoItemPage', component: InternoItemPage },

      { title: 'AcademicoPage', component: AcademicoPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#01994a');
      setTimeout(() => {
             this.splashScreen.hide();
           }, 100);
         });
    }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
