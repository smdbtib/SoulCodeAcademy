import homePage from "./moduloInterface";

//Manipulação de Eventos com a DOM
const filtro = document.getElementById("btFiltro");
filtro.addEventListener("click", (event) => {
  if (document.getElementById("nome").value === "") {
    alert("O Nome não pode estar vazio!");
  } else {
    document.getElementById(
      "filtroProdutos"
    ).innerHTML = homePage.filtrarProdutos();
  }
});
const adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", (event) => {
  if (
    document.getElementById("nome").value === "" &&
    document.getElementById("valor").value
  ) {
    alert("O Nome e Valor não pode estar vazio!");
  } else {
    homePage.adicaoProduto();
  }
});
homePage.montaListagem();
homePage.exibirOpcoes();
document.body.className = "corpoGeral";
document.getElementById("listaProdutos").innerHTML = `<h1>${
  homePage.titulo
}</h1>
${homePage.montaListagem()}
<p>Estes elementos são de um vetor estruturado em obejtos, de 
nome produto.</p>`;
document.getElementById("categoria").innerHTML = homePage.exibirOpcoes();
