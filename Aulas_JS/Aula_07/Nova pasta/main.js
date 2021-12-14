/* const meuP = document.querySelector("p#meu-p");
const texteNode =  document.createTextNode(" Tenho 32 anos!"); 
const p = document.querySelector("p");
p.appendChild(texteNode);
const div = document.querySelector("div"); */


const produtos = [
    { id: 10, nome: "feijão", valor: 8.0, categoria: "alimentos" },
    { id: 11, nome: "arroz", valor: 9.0, categoria: "alimentos" },
    { id: 12, nome: "milho", valor: 3.5, categoria: "alimentos" },
    { id: 13, nome: "creme dental", valor: 2.85, categoria: "higiene" },
    { id: 14, nome: "sabonete", valor: 1.95, categoria: "higiene" },
  ];

  class ProdutoCreator{
      constructor(seletor){
          this.elemento = document.querySelector(seletor);
      }

      creatProduto(produto){
          console.log(produto)
      }
  }

  const pc = new ProdutoCreator ("div#grid");

  produtos.forEach((produto) => pc.creatProduto(produto));

  