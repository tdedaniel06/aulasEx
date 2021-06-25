import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskChuckService {

  constructor(private http: HttpClient) { }

  link = "https://api.chucknorris.io/jokes/random";
  link2 = "https://api.chucknorris.io/jokes/search";

  piadaDoChuck = 'funny chuck -> do servico men';

  getJoke(){
    return this.http.get(this.link);
  }

  getJokeFromCat(valorAPesquisar : string){
    return this.http.get(this.link2,
      {
        params:{'query': valorAPesquisar}
      });
  }

}
