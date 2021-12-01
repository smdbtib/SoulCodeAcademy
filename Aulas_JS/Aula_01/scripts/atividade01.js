
var temFome = parseInt(prompt("Hora da merenda, tem fome? Digite: 1-SIM || 2-NÃO "));

if (temFome == 1){
    var nivelFome = parseInt( prompt("Informe o seu nível de fome em uma escala de 1 a 10:"));
    if (nivelFome > 0 && nivelFome <= 3){
        console.log("Vamos de cuscuz com ovo e carne seca!");
    }else if (nivelFome > 3 && nivelFome <=7){
        console.log("Vamos de filé de peixe grelhado!");
    }else if (nivelFome > 7 && nivelFome <= 10){
        console.log("Vamos de feijoada!");
    }else{
        console.log("Nível de fome informado, não está dentro dos parâmetros!");
    }    
}else{
    console.log("Hidrate-se beba água!");
}

