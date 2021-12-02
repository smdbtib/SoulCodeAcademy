console.log("Vamos que vamos!");

function recebeNome(){
     return prompt("Favor digite o seu nome: ");
}

function recebeNum(){
    return prompt("Olá " +nomeUsuario+ " favor digite um número");
}

function verificarNum(){ // ITEM 2
    var num = recebeNum();
    if (num > 0 && num < 100){
       return console.log(nomeUsuario+ " o número "+num+"  está no intervalo de 0 a 100");
    }else{
         return console.log(nomeUsuario+ " o número "+num+"  não está no intervalo de 0 a 100");
    }
}

function imprimirNumFor (){ // ITEM 3
    var num = recebeNum();
    console.log("Olá " +nomeUsuario+ "Imprimindo via FOR de 0 a " + num );
    for(i =0 ; i <= num ; i++){
        console.log(i);
    }
}

function imprimirNumWhile(){ // ITEM 4
    var num = recebeNum();
    var contador = 0;
    console.log("Olá " +nomeUsuario+ "Imprimindo via WHILE de " + contador + " a " + num );
    while(contador <= num){
        console.log(contador);
        contador++;
    }
}

function metodos(){
    var opcao = parseInt(prompt("Olá "+ nomeUsuario + " ESCOLHA: \n 1 - VERIFICAR NUM \n 2 - IMPRIMIR NUM VIA FOR \n 3 - IMPRIMIR NUM VIA WHILE \n 4 - SAIR"));
    while (opcao != 4){
        switch (opcao){
                case 1:
                    verificarNum();
                    break;
                case 2:
                    imprimirNumFor();
                    break;
                case 3:
                    imprimirNumWhile();
                    break;
                default:
                    alert("Opção inválida! Favor escolha entre: \n 1 - VERIFICAR NUM \n 2 - IMPRIMIR NUM VIA FOR \n 3 - IMPRIMIR NUM VIA WHILE \n 4 - SAIR");
            } 
    opcao = parseInt(prompt("Olá "+ nomeUsuario + " ESCOLHA: \n 1 - VERIFICAR NUM \n 2 - IMPRIMIR NUM VIA FOR \n 3 - IMPRIMIR NUM VIA WHILE \n 4 - SAIR"));   
    }     
}


var nomeUsuario  = recebeNome(); //ITEM 1
metodos();










