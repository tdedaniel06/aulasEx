import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n1 : number = 0;
  result : number = 0;
  sinal : string = "+";

  calc(event) {
    this.sinal = event.target.value;
    this.result = eval(this.result + this.sinal + this.n1);
  }
}
