import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.lerCookie();
  }

  aceitarCookie : boolean;

  aceitarCookies(ctn : HTMLElement){
    localStorage.setItem("cookie", "1");
    ctn.style.display = "none";
  }

  lerCookie(){
    //operador ternario
    //qualquer coisa ? true : false
    // qualquer coisa ? true <- if qualquer coisa true
    // : <- else false
    this.aceitarCookie = localStorage.getItem("cookie") == "1" ? true : false;
    console.log(this.aceitarCookie);
  }
}
