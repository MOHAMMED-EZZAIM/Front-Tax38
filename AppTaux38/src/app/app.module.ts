import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VilleComponent } from './Commun/ville/ville.component';
import { VilleService } from './service/ville.service';
import { NavbarComponent } from './Commun/navbar/navbar.component'// Assurez-vous d'importer votre service

@NgModule({
  declarations: [
    AppComponent,
    VilleComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importez HttpClientModule ici
  ],
  providers: [
    VilleService, // Ajoutez votre service à la liste des fournisseurs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
