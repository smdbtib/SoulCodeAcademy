import "./styles.css";
import "./moduloInterface";
import { PaginaModelo } from "./moduloInterface";

const homePage = new PaginaModelo();

homePage.montaListagem();
homePage.exibirOpcoes();
document.body.className = "corpoGeral";
document.getElementById(
  "listaProdutos"
).innerHTML = `<h1>${homePage.titulo}</h1>
${homePage.corpo}
<p>Estes elementos são de um vetor estruturado em obejtos, de 
nome produto.</p>`;
document.getElementById("categoria").innerHTML = homePage.exibirOpcoes();
