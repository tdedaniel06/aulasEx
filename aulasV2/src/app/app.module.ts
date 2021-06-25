import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    HomeComponent,
    NavBarComponent,
    ClinicaVeterinariaComponent,
    FourOFourComponent,
    ListaDeComprasComponent,
    AddComponent,
    BuyComponent,
    CookiesComponent,
    ChuckComponent,
    EvAndRefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
