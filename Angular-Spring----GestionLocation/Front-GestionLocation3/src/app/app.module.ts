import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBienComponent } from './display-bien/display-bien.component';
import {ResourcesService} from './services/resources.service';
import {HttpClientModule} from '@angular/common/http';
import { SingleBienComponent } from './single-bien/single-bien.component';
import { ReservationComponent } from './reservation/reservation.component';
import {FormsModule} from '@angular/forms';
import { ContratComponent } from './contrat/contrat.component';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBienComponent,
    SingleBienComponent,
    ReservationComponent,
    ContratComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [
    ResourcesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
