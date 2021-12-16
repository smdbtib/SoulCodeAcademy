import homePage from "./interfaceModule.js" 

document.getElementById("displayStudents").innerHTML = homePage.displayStudents();

document.getElementById("gender").innerHTML = homePage.displayGender();

const btFilter = document.getElementById("btFilter");
btFilter.addEventListener("click", (event) => {
    let name = document.getElementById("nome").value;
    if(name === "" ){
        alert("It is necessary to inform the name to make the filter.");
    }else{
        document.getElementById("filterStudents").
        innerHTML = homePage.filterStudents(name);
    }
});

const btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", (event) => {
    let nome = document.getElementById("nome").value,
        sobrenome = document.getElementById("sobrenome").value,
        nascimento = document.getElementById("nascimento").value,
        rg= document.getElementById("rg").value,
        cpf = document.getElementById("cpf").value,
        genero = document.getElementById("genero").value,
        renda = document.getElementById("renda").value,
        genderAdd = document.getElementById("genderAdd").value;
    if(nome === "" || sobrenome === "" || nascimento  === "" || rg === "" || cpf === "" || genero === "" ){
        alert("It is necessary to inform the name to make the filter.");
    }else{
        document.getElementById("filterStudents").
        innerHTML = homePage.filterStudents(name);
    }
});

