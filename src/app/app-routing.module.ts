import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {IniciarSessioCantanhedeComponent} from "./pages/iniciar-sessio-cantanhede/iniciar-sessio-cantanhede.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'usuari',
    component: IniciarSessioCantanhedeComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'usuari'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
