import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayBienComponent} from './display-bien/display-bien.component';
import {SingleBienComponent} from './single-bien/single-bien.component';
import {ReservationComponent} from './reservation/reservation.component';
import {ContratComponent} from './contrat/contrat.component';

const routes: Routes = [
  {
    path: 'displayBien' , component: DisplayBienComponent
  },
  {
    path:'infoBien/:id',component:SingleBienComponent
  },
  {
    path:'', component: DisplayBienComponent
  },
  {
    path:'reservation/:id',component:ReservationComponent
  },
  {
    path:'contrat/:id',component:ContratComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
