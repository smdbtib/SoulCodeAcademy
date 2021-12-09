//ATIVIDADE 03

// function receiveNumber() {
//     var receiveNumber = parseInt(prompt("Enter the number greater than 100:"));
//     while (receiveNumber <= 100 || receiveNumber >= 1000){ 
//         alert("Numero infomado não está entre o 100 e 1000! Entre com outro valor.  ");
//         receiveNumber = parseInt(prompt("Enter the number greater than 100:"));
//     }
//     return receiveNumber;
// }


// function printUntil(receiveNumber){
//     var limit = 999;
//     console.log("And there we go!")
//     while (receiveNumber <= limit){
//         console.log(receiveNumber)
//         receiveNumber++;
//     }
// }

// printUntil(receiveNumber());



function receiveNumber() {
    return parseInt(prompt("Enter the number greater than 100:"));
}


function validateNumber(){
    number = receiveNumber();
    while (number <= 100 || number >= 1000){ 
        alert("Number entered is not between 100 and 1000! Enter another value!.  ");
        number = receiveNumber();
    }
    return true;
}

function printUntil(number){
    var limit = 999;
    console.log("And there we go!")
    while (number <= limit){
        console.log(number)
        number++;
    }
}

var number = 0; 
number = receiveNumber();
if (validateNumber(number) === true){
    printUntil(number)
}

