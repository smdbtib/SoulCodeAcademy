function funcaoAula02 (){
    console.log("Vamos que vamos!");
}

// funcaoAula02();

function multiplicacao(p1, p2){
    return p1 * p2;
}

// console.log("A multiplicação é "+multiplicacao(5,5));

function facaAlgo (num){
    if (num>10){
        console.log("Número digitado é maior que 10:");
    }else{
        console.log("Número digitado não é maior que 10:");
    }
}

// var x = prompt("Digite um númro X:");
// facaAlgo(x);


function toCelsius (tempF){
    return (5/9) * (tempF-32)
}

console.log(toCelsius(85));