import homePage from "./moduloInterface.js";

homePage.montaListagem();
homePage.exibirOpcoes();
document.body.className = "corpoGeral";
document.getElementById("listaProdutos").innerHTML = `<h1>${homePage.titulo
    }</h1>
${homePage.montaListagem()}
<p>Estes elementos são de um vetor estruturado em objetos, de 
nome produto.</p>`;
document.getElementById("categoria").innerHTML = homePage.exibirOpcoes();

const filtro = document.getElementById("btFiltro");
filtro.addEventListener("click", (event) => {
    let nome = document.getElementById("nome").value,
        valor = document.getElementById("valor").value,
        categoria = document.getElementById("categoria").value;

    if (nome === "" || valor === "") {
        alert("Nome e Valor não podem estar vazios.");
    } else {
        document.getElementById(
            "filtroProdutos"
        ).innerHTML = homePage.filtrarProdutos(nome, valor, categoria);
    }
});

const adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", (event) => {
    let nome = document.getElementById("nome").value,
        valor = document.getElementById("valor").value,
        categoria = document.getElementById("categoria").value,
        categoriaAdd = document.getElementById("categoriaAdd").value;
    document.getElementById("listaProdutos").innerHTML = `<h1>${homePage.titulo
        }</h1>
  ${homePage.adicionarProduto(nome, valor, categoria, categoriaAdd)}`;
});