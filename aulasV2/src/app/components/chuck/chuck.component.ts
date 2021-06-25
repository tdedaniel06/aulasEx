import { Component, OnInit } from '@angular/core';
import { AskChuckService } from 'src/app/services/ask-chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(private chuckService : AskChuckService) { }

  ngOnInit(): void {
  }

  piada : string = 'TESTE';
  piadas : any;

  resultado : any;

  getChuck(){
    //this.piada = this.chuckService.piadaDoChuck;
    this.chuckService.getJoke().subscribe(
      data => {
        this.resultado = data, //aqui e a resposta que vem da api
        this.piada = this.resultado.value //aqui dizemos que a var piada = ao resultado.value (sem o value aparece [objetct object])
      }
    );
  }

  getMorePiadas(valorAPesquisar: string){
    this.chuckService.getJokeFromCat(valorAPesquisar).subscribe(data => {this.piadas = data});
  }
}
