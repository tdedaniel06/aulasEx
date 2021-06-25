import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/class/artigo';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent implements OnInit {

  listaService : ListaComprasService;

  constructor(private lista: ListaComprasService) {
    this.listaService = lista;
  }

  ngOnInit(): void {
  }

  Comprar(artigo : Artigo){
    this.listaService
  }

}
