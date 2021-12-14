// Importação dos dados via rota de extração do módulo.
import produtos from "./moduloDados";

class PaginaModelo {
  constructor(titulo, corpo) {
    this.titulo = titulo;
    this.corpo = corpo;
  }
  montaListagem() {
    let corpo = "";
    corpo += "<ol>";
    produtos.forEach((moduloProdutos, index) => {
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
    const categorias = produtos.map((produtos) => produtos.categoria);
    const seletorCategoria = [...new Set(categorias)];
    seletorCategoria.forEach((seletorCategoria, index) => {
      htmlOpcoes += `<option value="${seletorCategoria}">
      ${seletorCategoria.toLocaleUpperCase()} | ${index + 1}</option>`;
    });
    return htmlOpcoes;
  }
  filtrarProdutos() {
    let categoria = document.getElementById("categoria").value,
      nome = document.getElementById("nome").value,
      valor = document.getElementById("valor").value,
      filtroHtml = "";

    const filtroProdutos = produtos
      .filter((produtos) => produtos.nome === nome)
      .filter((filtroProdutos) => filtroProdutos.categoria === categoria);
    filtroHtml += `<ol>`;
    filtroProdutos.forEach((filtroProdutos, index) => {
      let corItem = "";
      if (index % 2 === 0) {
        corItem = "itemAzul";
      } else {
        corItem = "itemClaro";
      }
      filtroHtml += `<li class="${corItem}">
      ${filtroProdutos.nome} | Preço: ${filtroProdutos.valor.toFixed(
        2
      )} | Taxado: ${this.calcularImposto(0.023, filtroProdutos.valor).toFixed(
        2
      )} | [${filtroProdutos.categoria}]`;
    });
    filtroHtml += `</ol>`;
    return filtroHtml;
  }
  adicaoProduto() {
    let nome = document.getElementById("nome").value,
      valor = document.getElementById("valor").value,
      categoria = document.getElementById("categoria").value,
      categoriaAdd = document.getElementById("categoriaAdd").value;
    if (categoriaAdd !== "") {
      categoria = categoriaAdd;
    }
    produtos.splice(produtos.length, 0, {
      id: produtos.length + 10,
      nome: nome,
      valor: valor,
      categoria: categoria
    });
    console.log(produtos);
    let corpo = "";
    corpo += "<ol>";
    produtos.forEach((moduloProdutos, index) => {
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
}
// Construção  objeto para rota de parâmetro na transsição.
const homePage = new PaginaModelo("Interação com a DOM", "");
// Exportando o objeto para o módulo principal.
export default homePage;
