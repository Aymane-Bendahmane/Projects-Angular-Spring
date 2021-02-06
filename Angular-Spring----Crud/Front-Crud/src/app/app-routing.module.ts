import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewProduitComponent} from "./new-produit/new-produit.component";
import {AffichageProduitComponent} from "./affichage-produit/affichage-produit.component";
import {UpdateProduitComponent} from "./update-produit/update-produit.component";

const routes: Routes = [
  {
    path : "addProd",
    component : NewProduitComponent
  },
  {
    path : "afficherProduit",
    component : AffichageProduitComponent
  }
  ,{
    path : "update/:id",
    component : UpdateProduitComponent
  },
  {
    path : "",
    component : AffichageProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
