import { Component, OnInit } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  listaService : ListaComprasService;

  constructor(private lista : ListaComprasService) {
    this.listaService = lista;
  }


  ngOnInit(): void {
  }

  AdicionarLista(){
    //this.listaService.listaCompras.push(new Artigo("Maças", 3));
  }
}
