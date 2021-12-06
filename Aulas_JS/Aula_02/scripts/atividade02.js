
//EXERCICIO 1
var listaProdutos = ["Arroz", "Feijão", "Sal","Açúcar", "Café"];
var precosProdutos = [15.50, 8.50, 3.50, 9.50, 15.50];

function imprimirProdutos(){
    for(var i = 0 ; i < listaProdutos.length ; i++){
        console.log(listaProdutos[i]+" valor  R$ "+precosProdutos[i]);
        //console.log(listaProdutos[i]);
    }   
}
imprimirProdutos();


//EXERCICIO 2
var numeros = [];
var soma = 0;

function gerarNumeros(){
    for(var i = 1 ; i <= 1000; i++){
        numeros.push(i+1);
    } 
    for (var i = 1 ; i <= numeros.length; i++){
        soma += numeros[i];
    }
    console.log(soma); 
}
gerarNumeros();


//EXERCICIO 3
var arrayNumeros = [20, 30, 40, 50, 60, 70, 100];
var arrayReverse = [];

function numerosReverse(){
    for (i = arrayNumeros.length - 1; i >= 0 ; i-- ){
        arrayReverse.push(arrayNumeros[i]);
    }
    console.log(arrayReverse);
}
numerosReverse();


//EXERCICIO 4
var arrayNumerosAleatorios = [-2, 3, 4, -5, 6, -7, 10];
var arrayNumerosPositovos = [];

function numerosPositivos(){
    for (i = arrayNumerosAleatorios.length - 1; i >= 0 ; i-- ){
        if(arrayNumerosAleatorios[i] >= 0 ){
            arrayNumerosPositovos.push(arrayNumerosAleatorios[i]);
        }
        
    }
    console.log(arrayNumerosPositovos);
}

numerosPositivos();