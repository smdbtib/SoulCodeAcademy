import homePage from "./interfaceModule.js" 

document.getElementById("displayStudents").innerHTML = homePage.displayStudents();
document.getElementById("gender").innerHTML = homePage.displayGender();
const btFilter = document.getElementById("btFilter");
btFilter.addEventListener("click", (event) => {
    let name = document.getElementById("name").value;
    if(name === "" ){
        alert("It is necessary to inform the name to make the filter.");
    }else{
        document.getElementById("filterStudents").innerHTML = homePage.filterStudents(name);
    }
});
const btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", (event) => {
    let name = document.getElementById("name").value,
        surname = document.getElementById("surname").value,
        birth = document.getElementById("birth").value,
        rg= document.getElementById("rg").value,
        cpf = document.getElementById("cpf").value,
        gender = document.getElementById("gender").value,
        income = document.getElementById("income").value,
        addGender = document.getElementById("genderAdd").value;
    if(
        name === "" ||
        surname === "" ||
        birth  === "" ||
        rg === "" ||
        cpf === "" ||
        gender === "" ||
        income === "" )
        {
            alert("Fields cannot be empty!");
    } else {
        document.getElementById("displayStudents").innerHTML = homePage.addStudent(
            name,
            surname,
            birth,
            rg,
            cpf,
            gender,
            income,
            addGender
        );
        document.getElementById("gender").innerHTML = displayStudents();
    }
});

