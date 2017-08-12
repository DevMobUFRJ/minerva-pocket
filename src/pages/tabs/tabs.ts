import { Component } from '@angular/core';
import { CategoriasPage } from '../categorias/categorias';
import { NavegarPage } from '../navegar/navegar';

@Component({
  templateUrl: `tabs.html`
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  categorias:any = CategoriasPage;
  navegar:any = NavegarPage; 

  constructor() {

  }
}
