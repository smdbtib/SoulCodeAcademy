/* 
REVISÃO JS - LÓGICA DE PROGRAMAÇAO 
------ESTRUTURAS DE DADOS
------ESTRUTURAS DE REPETIÇÃO
------FUNLÇÕES
------ARRAYS
*/

var idade = 17;
var temPermissao = true;

// VERIFICAÇÃO DE IDADE
console.log("\nVERIFICAR IDADE\n");
if(idade > 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}

// IF ENCADEADO IF
console.log("\nIF ENCADEADO IF\n");
if(idade > 18){
    console.log("Acesso liberado!");
}else{
    if (temPermissao == true){
        console.log("Tem permissão com responsável.");
    }
    else{
        console.log("Acesso negado!");
    }
}

// IF ENCADEADO COM ELSE IF
console.log("\nIF ENCADEADO COM ELSE IF\n");
if (idade > 18){
    console.log("Acesso liberado!");
}else if(temPermissao == true){
    console.log("Tem permissão com responsável.");
}else{
    console.log("Acesso negado!");
}

// LOOP WHILE
console.log("\nIF LOOP WHILE\n");
var limit = 30;
var counter = 0;

while (counter < limit){
    counter++;
}
console.log("Last counter value: " +counter);


