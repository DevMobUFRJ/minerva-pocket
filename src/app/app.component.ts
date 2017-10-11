import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav} from 'ionic-angular';

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
import { AuditorioPage } from '../pages/categorias/academico/auditorio/auditorio';
import { AuditorioItemPage } from '../pages/categorias/academico/auditorio/auditorio-item/auditorio-item';
import { BibliotecaPage } from '../pages/categorias/academico/biblioteca/biblioteca';
import { BibliotecaItemPage } from '../pages/categorias/academico/biblioteca/biblioteca-item/biblioteca-item';
import { CaDaPage } from '../pages/categorias/academico/cada/cada';
import { CaDaItemPage } from '../pages/categorias/academico/cada/cada-item/cada-item';
import { SecretariaPage } from '../pages/categorias/academico/secretaria/secretaria';
import { SecretariaItemPage } from '../pages/categorias/academico/secretaria/secretaria-item/secretaria-item';

import { InfraestruturaPage } from '../pages/categorias/infraestrutura/infraestrutura';
import { BanheiroPage } from '../pages/categorias/infraestrutura/banheiro/banheiro';
import { BebedouroPage } from '../pages/categorias/infraestrutura/bebedouro/bebedouro';
import { EstacionamentoPage } from '../pages/categorias/infraestrutura/estacionamento/estacionamento';
import { BicicletarioPage } from '../pages/categorias/infraestrutura/bicicletario/bicicletario';

import { BanheiroItemPage } from './../pages/categorias/infraestrutura/banheiro/banheiro-item/banheiro-item';
import { BebedouroItemPage } from './../pages/categorias/infraestrutura/bebedouro/bebedouro-item/bebedouro-item';
import { EstacionamentoItemPage } from './../pages/categorias/infraestrutura/estacionamento/estacionamento-item/estacionamento-item';
import { BicicletarioItemPage } from './../pages/categorias/infraestrutura/bicicletario/bicicletario-item/bicicletario-item';

import { ContatoPage } from '../pages/contato/contato';
import { SobrePage } from '../pages/sobre/sobre';

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
  sidepages: Array<{title: string, icon:string, component: any}>;
  ideias: Array<{ title: string, icon: string, component: any}>;
  
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,

  ) {
    this.initializeApp();

    this.sidepages = [
      { title: 'Contato', icon:"md-mail", component: ContatoPage },
      { title: 'Sobre', icon: "logo-android", component: SobrePage }
    ];
    this.ideias = [
      { title: 'Contato', icon:"bulb", component: ContatoPage },
    ];

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
      { title: 'AuditorioPage', component: AuditorioPage },
      { title: 'AuditorioItemPage', component: AuditorioItemPage },
      { title: 'BibliotecaPage', component: BibliotecaPage },
      { title: 'BibliotecaItemPage', component: BibliotecaItemPage },
      { title: 'CaDaPage', component: CaDaPage },
      { title: 'CaDaItemPage', component: CaDaItemPage },
      { title: 'SecretariaPage', component: SecretariaPage },
      { title: 'SecretariaItemPage', component: SecretariaItemPage },

      { title: 'InfraestruturaPage', component: InfraestruturaPage },
      { title: 'BanheiroPage', component: BanheiroPage },
      { title: 'BebedouroPage', component: BebedouroPage },
      { title: 'EstacionamentoPage', component: EstacionamentoPage },
      { title: 'BicicletarioPage', component: BicicletarioPage },

      { title: 'BanheiroItemPage', component: BanheiroItemPage },
      { title: 'BebedouroItemPage', component: BebedouroItemPage },
      { title: 'EstacionamentoItemPage', component: EstacionamentoItemPage },
      { title: 'BicicletarioItemPage', component: BicicletarioItemPage },
      
      

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
    this.nav.push(page.component);
  }

}
