// Importação dos dados via rota de extração do módulo.
import produtos from "./moduloDados.js";

class PaginaModelo {
    constructor(titulo, corpo) {
        this.titulo = titulo;
        this.corpo = corpo;
    }
    montaListagem() {
        let corpo = "";
        corpo += "<ol>";
        produtos.forEach((produtos, index) => {
            let corItem = "";
            if (index % 2 === 0) {
                corItem = "itemAzul";
            } else {
                corItem = "itemClaro";
            }
            corpo += `<li class="${corItem}">${produtos.nome
                } | Preço: ${produtos.valor.toFixed(2)} | Taxado: 
        ${this.calcularImposto(0.023, produtos.valor).toFixed(2)}
        | [${produtos.categoria}] | </li>`;
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
    filtrarProdutos(nome, valor, categoria) {
        let filtroHtml = "";

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
    adicionarProduto(nome, valor, categoria, categoriaAdd) {
        if (categoriaAdd !== "") {
            alert("Nova cartegoria será adicionada.");
            categoria = categoriaAdd;
        }
        let adicionarHtml = "";
        produtos.splice(produtos.length, 0, {
            id: produtos.length + 10,
            nome: nome,
            valor: valor,
            categoria: categoria
        });
        console.log(produtos);
        adicionarHtml += `<ol>`;
        produtos.forEach((produtos, index) => {
            let corItem = "";
            if (index % 2 === 0) {
                corItem = "itemAzul";
            } else {
                corItem = "itemClaro";
            }
            adicionarHtml += `<li class="${corItem}">${produtos.nome} |Preço: ${produtos.valor
                } | Taxado: ${this.calcularImposto(0.023, produtos.valor).toFixed(
                    2
                )} | [${produtos.categoria}] </li>`;
        });
        adicionarHtml += `</ol>`;
        return adicionarHtml;
    }
}
const homePage = new PaginaModelo("Enviado via Parâmetro", "");

export default homePage;
