// CRIANDO ARRAY

// FORMA 1 
var meuArrya1 = new Array(); //Sem tamanho inicial 
var meuArrya2 = new Array(6);//6 posições vazias
var meuArray5 = new Array(1, 2, 3, 4, 5, 6);


// FORMA 2 
var meuArray3 = []; //Sem elementos
var meuArray4 = [1, 2, 3, 4, 5, 6]; // 6 posições preenchidas 


//ARRAY DE STRINGS
 var tecnologias = [
     "HTML",
     "CSS",
     "JS",
     "JQUERY",
     "BOOTSRAP",
     "NODEJS",
     "ANGULAR",
 ]


 //APRESENTANDO ARRAY
console.log("\nAPRESENTANDO ARRAY\n");
console.log(meuArray4)
console.log(tecnologias);
console.log(meuArrya1);


//ACESSANDO ELEMENTOS
console.log("\nACESSANDO ELEMENTOS\n");
console.log(tecnologias[0]);
console.log(tecnologias[1]);
console.log(tecnologias[5]);
console.log(tecnologias[3]);
console.log(tecnologias[2]);
var tamanho =  tecnologias.length;
console.log(tecnologias[tamanho - 1]);
console.log(tecnologias[tecnologias.length - 1]);


// PERCORRENDO ARRAY
var precos = [3.5, 2.5, 1.25, 2.6];
var logico = [true, false, true];

console.log("\nPERCORRENDO ARRAY");
for (var i=0; i < precos.length; i++){
    console.log(precos[i]);
}


//SOMANDO ELEMENTOS DO ARRAY
console.log("\nSOMANDO ELEMENTOS DO ARRAY");
var soma = 0;
for (var i =0; i < precos.length; i++){
    soma += precos[i];
}
console.log(soma);


// PERCORRENDO - ÚLTIMO INDEX PARA O PRIMEIRO -  ARRAY REVERSO
console.log("\nPERCORRENDO ARRAY REVERSO");
for (var i= precos.length -1; i >= 0  ; i--){
    console.log(precos[i]);
}


// CRIANDO FUNÇÃO PARA APRESENTAR ULTIMO ELEMENTO
console.log("\nFUNÇÃO PARA APRESENTAR ULTIMO ELEMENTO");
function ultimoElemento(array){
    var tamanho = array.length;
    return array[tamanho - 1];
}
console.log("\n");
console.log(ultimoElemento(tecnologias));
console.log(ultimoElemento(precos));


//INCREMENTANDO VALORES NO ARRAY
console.log("\nINCREMENTANDO VALORES NO ARRAY");
var numeros = [1, 2, 3, 4, 5];
numeros[0] = 7 ;
numeros[1]++;
numeros[2]--;
numeros[3]*=5;
console.log(numeros);


//TRABALHANDO COM VALORES NO ARRAY
console.log("\nTRABALHANDO COM VALORES NO ARRAY");
var salarios = [];
for (var i = 0; i < 2 ; i++){
    var salario = parseFloat(prompt("Digite seu salário: "));
    salarios.push(salario); // ADD ELEMENTOS
}
console.log(salarios);

salarios.pop();// REMOVENDO ELEMENTOS
salarios.pop();
salarios.push(100);


//MULTIPLOS TIPOS NO ARRAY
console.log("\nMULTIPLOS TIPOS NO ARRAY");
var dados = [100, "HTML", true, 2.6];
console.log(dados);
