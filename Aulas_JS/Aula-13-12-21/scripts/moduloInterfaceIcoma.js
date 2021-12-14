//Módulo de tratamento para m,ontagem de interface para construção da DOM.

//Chamada da Importação do módulo.
import "./moduloDados";
//Instancia do vetor do módulo.
import { produtos } from "./moduloDados";

//Instanciamento do vetor com base no módulo.
const moduloProdutos = new produtos();

class PaginaModelo {
  constructor(titulo, corpo) {
    this.titulo = titulo;
    this.corpo = corpo;
  }
  montaListagem() {
    let corpo = "";
    corpo += "<ol>";
    moduloProdutos.forEach((moduloProdutos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      corpo += `<li class="${corItem}">${
        moduloProdutos.nome
      } | Preço: ${moduloProdutos.valor.toFixed(2)} | Taxado: 
      ${this.calcularImposto(0.023, moduloProdutos.valor).toFixed(2)}
      | [${moduloProdutos.categoria}] | </li>`;
    });
    corpo += "</ol>";
    return corpo;
  }
  calcularImposto(taxa, valor) {
    return valor * (taxa + 1);
  }
  exibirOpcoes() {
    let htmlOpcoes = "";
    const categorias = moduloProdutos.map(
      (produtos) => moduloProdutos.categoria
    );
    const seletorCategoria = [...new Set(categorias)];
    seletorCategoria.forEach((seletorCategoria, index) => {
      htmlOpcoes += `<option value="${seletorCategoria}">
      ${seletorCategoria.toLocaleUpperCase()} | ${index + 1}</option>`;
    });
    return htmlOpcoes;
  }
}
