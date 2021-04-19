import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"Calculadora", component: CalculadoraComponent},
  {path:"ClinicaVeterinaria", component: ClinicaVeterinariaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
