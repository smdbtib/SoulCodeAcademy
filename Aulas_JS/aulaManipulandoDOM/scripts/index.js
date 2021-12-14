// Fonte da dados para construção das manipulações de estrutura.
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
  },
  {
    id: 17,
    nome: "Asinha de Frango",
    valor: 12.9,
    categoria: "alimentos"
  },
  {
    id: 18,
    nome: "Picanha Suína",
    valor: 23.6,
    categoria: "alimentos"
  }
);

//Montagem da classe base para interface HTML
class PaginaModelo {
  //Declaração da classe
  constructor(titulo, corpo) {
    //Constrtor dos atributos
    this.titulo = titulo;
    this.corpo = corpo; //Atributos da estrutura
  }
  montaListagem() {
    homePage.corpo += "<ol>";
    produtos.forEach((produtos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      homePage.corpo += `<li class="${corItem}">${
        produtos.nome
      } | Preço: ${produtos.valor.toFixed(2)} | Taxado: 
      ${homePage.calcularImposto(0.023, produtos.valor).toFixed(2)}
      | [${produtos.categoria}] |`;
    });
    homePage.corpo += "</ol>";
  }
  calcularImposto(taxa, valor) {
    return valor * (taxa + 1);
  }
  exibirOpcoes() {
    let htmlOpcoes = "";
    const categorias =  produtos.map((produtos) => produtos.categoria);
    const seletorCategoria = [... new Set(categorias)];
    seletorCategoria.forEach((seletorCategoria, index) => {
        htmlOpcoes += `<option value="${seletorCategoria}">
        ${seletorCategoria.toLocaleUpperCase()}</option>`;
    });
    console.log(htmlOpcoes);
    return htmlOpcoes;
  }
}
//Criando objeto local com base na classe anterior.
let homePage = new PaginaModelo("Minha DOM Principal", "");

homePage.montaListagem();
document.body.className = "corpoGeral";
document.getElementById("listaProdutos").innerHTML = `<h1>${homePage.titulo}</h1>
${homePage.corpo}
<p>Estes elementos são de um vetor estruturado em obejtos, de 
nome produto.</p>`;

homePage.exibirOpcoes();
document.getElementById("categoria").innerHTML = `${homePage.exibirOpcoes()}`;