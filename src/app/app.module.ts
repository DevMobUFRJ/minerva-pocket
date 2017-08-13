import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CategoriasPage } from '../pages/categorias/categorias';
import { NavegarPage } from '../pages/navegar/navegar';
import { TabsPage } from '../pages/tabs/tabs';

import { AlimentacaoPage } from '../pages/categorias/alimentacao/alimentacao';
import { AlimentacaoItemPage } from '../pages/categorias/alimentacao//alimentacao-item/alimentacao-item';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoriasPage,
    NavegarPage,
    TabsPage,

    ServicosPage,

    AlimentacaoPage,
    AlimentacaoItemPage,

    XeroxGraficaPage,
    XeroxGraficaItemPage,
    BancoPage,
    BancoItemPage,
    ComercioPage,
    ComercioItemPage,
    OutroPage,
    OutroItemPage,

    TransportePage,
    ExternoPage,
    ExternoItemPage,
    InternoPage,
    InternoItemPage,

    AcademicoPage,
    AuditorioPage,
    AuditorioItemPage,
    BibliotecaPage,
    BibliotecaItemPage,
    CaDaPage,
    CaDaItemPage,
    SecretariaPage,
    SecretariaItemPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top',tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriasPage,
    NavegarPage,
    TabsPage,

    ServicosPage,

    AlimentacaoPage,
    AlimentacaoItemPage,

    XeroxGraficaPage,
    XeroxGraficaItemPage,
    BancoPage,
    BancoItemPage,
    ComercioPage,
    ComercioItemPage,
    OutroPage,
    OutroItemPage,

    TransportePage,
    ExternoPage,
    ExternoItemPage,
    InternoPage,
    InternoItemPage,

    AcademicoPage,
    AuditorioPage,
    AuditorioItemPage,
    BibliotecaPage,
    BibliotecaItemPage,
    CaDaPage,
    CaDaItemPage,
    SecretariaPage,
    SecretariaItemPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
