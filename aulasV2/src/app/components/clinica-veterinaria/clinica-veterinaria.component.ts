import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-clinica-veterinaria',
  templateUrl: './clinica-veterinaria.component.html',
  styleUrls: ['./clinica-veterinaria.component.css']
})
export class ClinicaVeterinariaComponent implements OnInit {

  //variavel do mesmo tipo do service, PhoneBookService neste caso
  agendaService : PhoneBookService;

  //contrutor com o service do phoneBook (em private para encapsolacao)
  constructor(private serviceDoPhoneBook : PhoneBookService) {
    this.agendaService = serviceDoPhoneBook; //o valor da variavel local é o que é enviado ao contrutor
   }

   //esta funcao altera o valor de uma variavel no service phoneBookService
   muda(event){
    this.agendaService.name = event.target.value;
   }

  ngOnInit(): void {
  }

}
