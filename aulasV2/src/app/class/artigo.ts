export class Artigo {

  nome: string;
  preco: number;
  carinho: boolean;

  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco;
    this.carinho = false;
  }

}
