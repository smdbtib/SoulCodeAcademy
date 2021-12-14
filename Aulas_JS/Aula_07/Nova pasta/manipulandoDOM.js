//import "..styles/style.css";
const produtos = [
  { id: 10, nome: "feijão", valor: 8.0, categoria: "alimentos" }, //Objeto
  { id: 11, nome: "arroz", valor: 9.0, categoria: "alimentos" }, //baseado em
  { id: 12, nome: "milho", valor: 3.5, categoria: "alimentos" }, //Produtos com
  { id: 13, nome: "creme dental", valor: 2.85, categoria: "higiene" }, //Estrutura de
  { id: 14, nome: "sabonete", valor: 1.95, categoria: "higiene" } //etiquetas de caracteristica
];
//Adição de itens no vetor baseado em cortes pelo indice.
produtos.splice(
  5,
  0,
  {
    id: 15,
    nome: "shampoo",
    valor: 21.0,
    categoria: "higiene"
  },
  {
    id: 16,
    nome: "condicionador",
    valor: 17.0,
    categoria: "higiene"
  }
);
//Modelando a DOM com modelos visuais de Javascript.
class PaginaModelo {
  //Modelagem da Classe construtora do visual.
  constructor(nome, corpo) {
    this.nome = nome;
    this.corpo = corpo;
  }
  //Método de montagem dos HTML para mandar para Interface.
  montaVisual() {
    produtos.forEach((produtos, index) => {
      //Tratamento do vetor
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "estiloVermelho";
      } else {
        corItem = "estiloAzul";
      }
      homePage.corpo += `<li value=${index} class="${corItem} corBase">${
        produtos.nome
      } | Preço: ${produtos.valor.toFixed(2)}</li>`;
    }); //Implementa a coleta de informações.
  }
}
//Alimentação inicial da classe para montar a página principal.
let homePage = new PaginaModelo("Pagina Principal", "");
//Método de tratamento para construção das informações visuais.
//Acessa a DOm paramontagem dos construções visuais.
document.body.className = "corpoGeral";
document.body.innerHTML = `<h1>${homePage.nome}</h1>`;
homePage.montaVisual();
document.body.innerHTML += `<ol>${homePage.corpo}</ol>`;
