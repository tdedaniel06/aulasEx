import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { HomeComponent } from './components/home/home.component';
import {  FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"Calculadora", component: CalculadoraComponent},
  {path:"ClinicaVeterinaria", component: ClinicaVeterinariaComponent},
  {path:"chuck", component: ChuckComponent},
  {path:"evRef", component: EvAndRefComponent},
  {path:"listaCompras", component: ListaDeComprasComponent,
    children:
      [
        { path:"add", component: AddComponent},
        { path:"buy", component: BuyComponent}
      ]
  },
  //abaixo fica a pagina not found, fica sempre em baixo
  //criamos a path notfoud, de seguida e abaixo criamos outra path ** para que se colocarem qualquer coisa que nao as routes acima
  //e sempre que for ** da redirect para o component FourOFour
  {path:"notfound", component: FourOFourComponent},
  {path:"**", redirectTo: "notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
