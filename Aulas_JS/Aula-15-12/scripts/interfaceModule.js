import students from "./dataModule.js";

class TemplatePage {
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
    displayStudents(){
      let listingHtml = "";  
      listingHtml += "<ol>";
      students.forEach((students, index) =>{
          let itemColor = "";
          if(index % 2 === 0){
            itemColor = "itemAzul"
          }else{
            itemColor = "itemClaro";
          }
          listingHtml += `<li class="${itemColor}"> 
                            | Name: ${students.nome} ${students.sobrenome} 
                            | Birth: ${students.nascimento}
                            | RG: ${students.rg}
                            | CPF: ${students.cpf}
                            | [${students.genero}]
                            | Income: ${students.renda.toFixed(2)}
                            | Margin: ${this.calculateMargin(0.3, students.renda).toFixed(2)}
                         </li>`
      });
      listingHtml += "</ol>"
      return listingHtml;
    }
    calculateMargin(rate, income ){
        return (rate * income);
    }
    displayGender(){
        let opitionHtml = "";
        const gender = students.map((students)=> students.genero);
        const genderOption = [... new Set(gender)];
        genderOption.forEach((genderOp) => {
            opitionHtml += `<option value="${genderOp}">
            ${genderOp.toLocaleUpperCase()}</option>`; 
        });
        return opitionHtml;
    }
    filterStudents(name){
        let listingHtml = "";  
        listingHtml += "<ol>";
        const filterStudents = students.filter((students)=> students.nome === name);
        filterStudents.forEach((filterStudents) => {
            let itemColor = "";
            if(index % 2 === 0){
              itemColor = "itemAzul"
            }else{
              itemColor = "itemClaro";
            }
            filterHtml += `<li class="${itemColor}"> 
                                | Name: ${filterStudents.nome} ${filterStudents.sobrenome} 
                                | Birth: ${filterStudents.nascimento}
                                | RG: ${filterStudents.rg}
                                | CPF: ${filterStudents.cpf}
                                | [${filterStudents.genero}]
                                | Income: ${filterStudents.renda.toFixed(2)}
                                | Margin: ${this.calculateMargin(0.3, filterStudents.renda).toFixed(2)}
                             </li>`
        });
        filterHtml += "</ol>"
        return filterHtml;
    }
    addStudent(nome, sobrenome, nascimento, rg, cpf, genero, renda){
        if(genderAdd !== ""){
            genero = genderAdd;
        }
        students.splice(students.length
            , 0,
            {
                id: students.length,
                nome: nome,
                sobrenome: sobrenome,
                nascimento: nascimento,
                rg: rg,
                cpf: cpf,
                genero: genero,
                renda: renda
            }
        );
        console.log(students);
    }
}
const homePage = new TemplatePage("Projeto Sala Invertida", "");
export default homePage;