import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import {FormsModule} from "@angular/forms";
import {ServiceProduitService} from "./servicee/service-produit.service";
import {HttpClientModule} from "@angular/common/http";
import { AffichageProduitComponent } from './affichage-produit/affichage-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProduitComponent,
    AffichageProduitComponent,
    UpdateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
