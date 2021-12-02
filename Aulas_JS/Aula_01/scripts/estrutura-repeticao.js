/* WILHE */

// var contador = 0 ;

// while (contador < 100){
//     console.log(contador);
//     contador = contador +5; // contador += 5;
// }
// console.log("Ultimo valor do contador " +contador);
// console.log("FIM EXECUÇÃO");

// var parar = false;

// while(!parar){
//     var resposta = prompt("Quer parar? S/N");
//     if(resposta === "S"){
//         parar = true; //ATUALIZAÇÃO
//     }
// }

/*FIM WILHE */

/* FOR */

for (contador = 0;  contador < 1000; contador++){
    console.log(contador);
}
console.log(contador);
console.log("Vamos que vamos!");

//---------------------------------------------------
// TARDE
//---------------------------------------------------
// ESTRUTURAS DE REPETIÇÃO
// while (false) {
//   console.log('ninguém me segura')
// }
// console.log('to aqui')

// Ir de 0 a 100 -----------------
// var contador = 0
// while (contador <= 100) {
//   console.log('Mais um número: ' + contador)
//   contador++
// }
// console.log('to aqui')

// Ir de 100 a 0 ---------------------
// var contador = 100
// while (contador >= 0) {
//   console.log('Mais um número: ' + contador)
//   contador--
// }
// console.log('to aqui')

// Soma de 1 a 10 ---------------------
// var contador = 1
// var soma = 0
// while (contador <= 10) {
//   soma += contador
//   contador++
// }
// console.log(soma)

// Contando de 5 em cinco ---------------------
// var contador = 0
// while (contador <= 100) {
//   console.log(contador)
//   contador += 5
// }

//While + If ---------------------
// var parar = false
// ! false = true
// ! true = false
//
//
// while (!parar) {
//   var resposta = prompt('Quer parar? S ou N')
//   if (resposta === 'S') {
//     parar = true // atualização
//   }
// }
// console.log('Tô aqui!')
//
//
// var continuar = true
// while (continuar) {
//   var resposta = prompt('Quer continuar? S/N')
//   if (resposta === 'N') {
//     continuar = false // atualização
//   }
// }
// console.log('Tô aqui!')
//
//
// Parte 02 - LOOP FOR
// DE 0 A 1000
// for (var contador = 0; contador < 1000; contador++) {
//   console.log(contador)
// }

// console.log('o último valor de contador foi ' + contador)
//
//
// DE 1000 A 1---------------------
// for (var contador = 1000; contador > 0; contador--) {
//   console.log(contador)
// }
// console.log('o último valor de contador foi ' + contador)
//
//
// SOMA---------------------
// var soma = 0
// for (var contador = 1; contador <= 10; contador++) {
//   soma += contador //soma = soma + contador
//   console.log(soma)
// }
// console.log(soma) // nesse caso somente mostra a soma final
//
//
// SOMA ---------------------
//Contando de 5 em cinco ---------------------
// var contador = 0
// for (var contador = 0; contador < 100; contador += 5) {
//   console.log(contador)
// }
//
// console.log('Último valor: ' + contador)
//
//
// --------------------------------------------
// ATIVIDADE
// --------------------------------------------
// ESCOLHER UMA:
// 1. MOSTRE A SOMA DOS NÚMEROS DE 1 A 1001 (WHILE OU FOR)
// 2. MOSTRAR A TABUADA DO 9 COM WHILE OU FOR
// 3. DESAFIO: MOSTRAR O SEGUINTE ESQUEMA COM FOR
// 1
// 12
// 123
// 1234
// 12345
//
//
// 1. Soma  --------------------------------------------
// var soma = 0
// for (var contador = 1; contador <= 1001; contador++) {
//   soma += contador
// }
// console.log(soma)
//
//
// 2. Tabuada --------------------------------------------
//
// var num = parseInt(prompt('Qual a tabuada que você quer?'))
// var indice = 0
//
// WHILE
// while (indice < 10) {
//   indice++
//   var calculo = indice * num
//   console.log(indice + ' x ' + num + ' = ' + calculo)
// }
//
//
//ou FOR
// var num = 9
// for (var indice = 1; indice <= 10; indice++) {
//   console.log(indice + ' x ' + num + ' = ' + indice * num)
// }
//
// LOOP DENTRO DE LOOP - Várias tabuadas (até 10)
// for (var t = 1; t <= 10; t++) {
//   for (var n = 1; n <= 10; n++) {
//     console.log(t + ' x ' + n + ' = ' + t * n)
//   }
//   console.log('\n')
// }
//
//
// 3. Desafio  --------------------------------------------
// var somaString = ''
// for (var contador = 1; contador <= 5; contador++) {
//   somaString += contador
//   console.log(somaString)
// }