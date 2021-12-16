console.log("Vamos que Vamos!");

/*
Atividade Prática de Fixação:

1)Monte uma classe visual idêntica a classe PaginaModelo da referência dos códigos usados em sala:
    a)Monte a classe com os fundamentos construtores.
    b)Monte a linha de chamada do objeto homePage.
 */

const alunos = [
    { id: 1, nome: "Raiza", sobrenome: "Freitas", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "F", renda: 7500 },
    { id: 2, nome: "Frederico", sobrenome: "Dias", nascimento: "03/03/1989", rg: "1234568", cpf: 03251254130, genero: "M", renda: 0 },
    { id: 3, nome: "Rafael", sobrenome: "Moreira", nascimento: "11/03/2017", rg: "1234568", cpf: 03251254130, genero: "M", renda: 1300 },
    { id: 4, nome: "Rebecca", sobrenome: "Batista", nascimento: "25/09/1995", rg: "1234568", cpf: 03251254130, genero: "F", renda: 500 },
    { id: 5, nome: "Clévis", sobrenome: "Assis", nascimento: "18/10/1972", rg: "1234568", cpf: 03251254130, genero: "M", renda: 2500 },
    { id: 6, nome: "Ines", sobrenome: "Freitas", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "F", renda: 3500 },
    { id: 7, nome: "Daniel", sobrenome: "Assis", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "M", renda: 2500 },
    { id: 8, nome: "Larissa", sobrenome: "Batista", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "F", renda: 200 },
    { id: 9, nome: "Luiza", sobrenome: "Moreira", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "F", renda: 1000 },
    { id: 10, nome: "Leticia", sobrenome: "Dias", nascimento: "19/12/1987", rg: "1234568", cpf: 3251254130, genero: "F", renda: 750 },
    { id: 11, nome: "Samuel", sobrenome: "Bento", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "M", renda: 100 },
    { id: 12, nome: "Matheus", sobrenome: "Andrade", nascimento: "19/12/1987", rg: "1234568", cpf: 03251254130, genero: "M", renda: 0 },
    ];


class TamplatePage {
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
    setVisual(){
         
        homePage.body += "<ol>";
        alunos.forEach((alunos) => {
            homePage.body +=
                `<li>  | Nome: ${alunos.nome} 
                       | Sobrenome: ${alunos.sobrenome}
                       | Data de Nascimento: ${alunos.nascimento}
                       | Renda ${alunos.renda}
                </li>`;
          });
          homePage.body += "</ol>";
    }
}

let homePage = new TamplatePage("Atividade: Prática de Fixação", "");
homePage.setVisual();
document.body.innerHTML = `<h1>${homePage.title}</h1> ${homePage.body}`;

