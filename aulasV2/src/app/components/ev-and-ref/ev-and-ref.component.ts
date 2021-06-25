import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  back : string;
  tam : number = 10;
  acelarador : number = 5;

  changeColor(valor:string){
    this.back = valor
  }

  changeOpa(inputChange){
    if(inputChange.style.opacity == 0){
      inputChange.style.opacity = 1;
    }
    else{
      inputChange.style.opacity = 0;
    }
  }

  changeSize(inputChange:HTMLElement){
    this.tam ++;
    if(this.tam < 20){
      inputChange.style.height = this.tam + "px";
    }
    else{
      this.tam = 10;
    }
  }

  rotate(inputChange:HTMLElement){
    inputChange.style.transform = "rotate(" + this.acelarador + "deg)"
    this.acelarador *= 5;
  }
}
