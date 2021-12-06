//ATIVIDADE 01
var mengao = "Mengão";
var golsMengao = parseInt(prompt("Informe os gols do " + mengao));
var timeb = prompt("Digite o nome do time B");
var golsTimeB = parseInt(prompt("Informe os gols do " + timeb));


if (golsMengao > golsTimeB) {
    alert("Nação deu Mengão!\n" + mengao + " " + golsMengao + " X " + timeb + " " + golsTimeB);
} else if (golsMengao == golsTimeB) {
    alert("Nação o Mengão EMPATOU!\n" + mengao + " " + golsMengao + " X " + timeb + " " + golsTimeB)
} else {
    alert("Nação!  O Mengão não jogou bem hoje, fomos derrotados pelo " + timeb + " , vamos trabalhar para voltarmos melhor no próximo jogo!\n" + mengao + " " + golsMengao + " X " + timeb + " " + golsTimeB);
}

