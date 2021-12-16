/*ORIENTAÇÃO GERAL
Exercícios de Lógica de Programação com JS
Considerações iniciais

Use este documento para colocar suas respostas em código javascript.
Deve constar nas respostas apenas código javascript (sem html ou css). 

Observação: Quando o enunciado indicar “Receba ...” 
significa que deve ser feito o uso da instrução prompt(),
e dependendo do contexto, use parseFloat/parseInt para devida conversão de tipos.

Observações: Ao copiar do VSCode cole sem formatação para se adequar ao padrão acima. 
Utilize o comando ctrl + shift + v no espaço de resposta.

 */

/*Questão 01) 
Conteúdos: Variáveis e operadores matemáticos.
Enunciado: Declare um conjunto de variáveis para representar um aluno: nome (string), nota1 (number),
nota2 (number) e aprovado(boolean). Após isso, calcule a média do aluno. 
 

var nome = "Samuel";
var nota1 = 8.5;
var nota2 = 9;
var aprovado = true;

function calculaMedia(nota1, nota2) {
    var media = (nota1 + nota2) / 2;
    if ((media >= 7) && (media <= 10)) {
        console.log("Parabéns, " + nome + " você foi aprovado!");
        return aprovado = true;
    } else if ((media >= 0) && (media < 7)) {
        console.log(nome + " infelizmente você  não foi aprovado!");
        return aprovado = false;
    }
}
aprovado = calculaMedia(nota1, nota2);
console.log(aprovado);
*/

/*Questão 02) 
Conteúdos: Estruturas condicionais, variáveis, operadores lógicos.
Enunciado: Receba via prompt() três números (um por vez) e diga qual é o maior entre eles.

var numberOne = parseInt(prompt("Please enter the first number:"));
var numberTwo = parseInt(prompt("Please enter the second number:"));
var numberThree = parseInt(prompt("Please enter the third number:"));

if ((numberOne > numberTwo) && (numberOne > numberThree)) {
    alert(`The number  ${numberOne} is greater than the numbers ${numberTwo} and ${numberThree}`);
} else if ((numberTwo > numberOne) && (numberTwo > numberThree)) {
    alert(`The number ${numberTwo} is greater than the numbers ${numberOne} and  ${numberThree}`);
} else if ((numberThree > numberOne) && (numberThree > numberTwo)) {
    alert(`The number ${numberThree} is greater than the numbers ${numberOne} and  ${numberTwo}`);
}
*/

/*Questão 03) 
Conteúdos: Estruturas de repetição, variáveis, operadores lógicos.
Enunciado: Some de 0 até 100. Pode utilizar while ou for.

var soma = 0;
for (var i = 0; i <= 100; i++) {
    soma += i;
}
console.log(soma);
*/

/*Questão 04) 
Conteúdos: Estruturas de repetição, estruturas condicionais, variáveis, operadores lógicos.
Enunciado: Exiba na tela todos os números de 0 a 1000 que são pares.

for(var i = 1; i <= 1000; i++){
    if(i % 2 === 0 ){
        console.log(i);
    }
}
*/

/*Questão 05) 
Conteúdos: Funções com parâmetros e retorno.
Enunciado: Crie quatro funções: soma, subtração, divisão e multiplicação.
Todas as funções devem ter dois parâmetros e retornar o resultado da operação. 

function doSum(nunberOne, numberTwo) {
    return (nunberOne + numberTwo);
}

function doSubtraction(numberOne, numberTwo) {
    return (numberOne - numberTwo);
}

function doDivide(numberOne, numberTwo) {
    return (numberOne / numberTwo);
}

function doMultiplication(numberOne, numberTwo) {
    return (numberOne * numberTwo)
}
*/

/*Questão 06) 
Conteúdos: Arrays, estruturas de repetição, variáveis.
Enunciado: Crie um array vazio, e leia via prompt() 5 valores. Em seguida, exiba o produto de todos os 5 elementos no array (multiplicação). Exemplo: [1, 2, 3, 4, 5] resulta em 120.

var values = [];
for (var i = 0; i < 5; i++) {
    values[i] = parseInt(prompt(`Please enter whit the value ${i + 1}:`));
}
var multResult = values[0];
for (var i = 1; i < values.length; i++) {
    multResult *= values[i];
}
alert(`The result of multiplying the values ​​is: [${multResult}]`);
*/

/*Questão 07) 
Conteúdos: Arrays, estruturas de repetição, variáveis.
Enunciado: De acordo com o array abaixo, incremente 1 em todos os valores dele.

var values = [1, 2, 3, 4, 5];
alert(`Before the increment: [${values}] `);
for (var i = 0; i < values.length; i++) {
    values[i]++;
}
alert(`Afater the increment: [${values}] `);
*/

/*Questão 08)
Conteúdos: Arrays, métodos de arrays, variáveis.
Enunciado: 
De acordo com o array abaixo, crie uma função que recebe um índice e remove o valor no índice indicado.

var valores = [1, 2, 3, 4, 5];
console.log(valores);
function removeValor(value){
    return valores.splice(value, 1);
}
removeValor(4);
console.log(valores); // [1, 2, 3, 5]
*/

/*Questão 09) 
Conteúdos: Objetos.
Enunciado: Crie um objeto que representa um aluno. Com atributos: nome, média, idade.
E um método que exibe todos os atributos via console.log().

class Aluno {
    constructor(nome, media, idade){
        this.nome = nome;
        this.media = media;
        this.idade = idade;
    }
    exibirAluno (){
        console.log(`Name: ${this.nome} | Avarage: ${this.media} | Age: ${this.idade} `);
    }
}
var aluno = new Aluno("Samuel", 9, 32);
aluno.exibirAluno();
*/ 

/*Questão 10) 
Conteúdos: Objetos.
Enunciado: Crie uma função construtora para um objeto Curso. E crie dois cursos diferentes.

class Cursos {
    constructor(nome, cargaHoraria, modulos, valor){
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.modulos = modulos;
        this.valor = valor;
    }
}

var cursoJs = new Cursos("Java Script", 40, 6, 199);
console.log(cursoJs);
var cursoBootstrap = new Cursos("Bootstrap", 18, 5, 244);
console.log(cursoBootstrap);
*/

/*Questão 11) 
Conteúdos: Strings.
Enunciado: Receba um nome e abrevie. Exemplo: “José Almir” resulta em  “José A.”

function abbreviateName() {
    var name = prompt(`Please enter your first and last name:`);
    //var removeTermos = "da,de,das,dos".split(" ");
    //console.log(removeTermos);
    var splitName = name.split(" ");
    var removeLastNames = [];
    for (var i = 0; i < 2; i++) {
        removeLastNames[i] = splitName[i];
    }
    return console.log((removeLastNames[0] + " " + removeLastNames[1].substring(0, 1).toLocaleUpperCase() + "."));
}
abbreviateName();
*/

/*Questão 12) 
Conteúdos: POO.
Enunciado: Crie uma classe Aluno, com os atributos nome, idade, média e um método que retorna um boolean informando se a média é maior que 7 (aluno aprovado).

class Aluno {
    constructor(nome, idade, media) {
        this.nome = nome;
        this.idade = idade;
        this.media = media;
    }
    calculaMedia(nota1, nota2) {
        this.media = (nota1 + nota2) / 2;
        if ((this.media > 7) && (this.media <= 10)) {
            return true;
        } else if ((this.media >= 0) && (this.media <= 7)) {
            return false;
        }
    }
    notaExtra(notaAdicional) {
        this.media += notaAdicional;
        if (this.media > 10) {
            this.media = 10;
            console.log(`Parabéns, você tem a média máxima, você é um aluno nota ${this.media}!`);
        }
    }
}
var aluno = new Aluno("Samuel", 32, 0);
if (aluno.calculaMedia(8, 9) === true) {
    console.log(`Parabéns, ${aluno.nome} você foi aprovado!`);
} else {
    console.log(` ${aluno.nome} infelizmente você não foi aprovado, tente outra vez!`);
}
*/

/*Questão 13) 
Conteúdos: POO e arrays.
Enunciado: Usando a classe Aluno crie um array de 5 alunos.

var listaAlunos = [];
listaAlunos[0] = new Aluno("Raiza", 33, 0);
listaAlunos[1] = new Aluno("Rafael", 40, 0);
listaAlunos[2] = new Aluno("Amy", 23, 0);
listaAlunos[3] = new Aluno("Leticia", 19, 0);
listaAlunos[4] = new Aluno("Daniel", 30, 0);
console.log(listaAlunos);
*/

/*Questão 14) 
Conteúdos: POO e métodos.
Enunciado: Adicione o método notaExtra() na classe Aluno, ela recebe uma pontuação e adiciona na média do aluno.
Porém, a média resultante não deve passar de 10, faça uma condição para impedir que a média fique com um valor inválido como 11 por exemplo.

class Aluno {
    constructor(nome, idade, media) {
        this.nome = nome;
        this.idade = idade;
        this.media = media;
    }
    calculaMedia(nota1, nota2) {
        this.media = (nota1 + nota2) / 2;
        if ((this.media > 7) && (this.media <= 10)) {
            return true;
        } else if ((this.media >= 0) && (this.media <= 7)) {
            return false;
        }
    }
    notaExtra(notaAdicional) {
        this.media += notaAdicional;
        if (this.media > 10) {
            this.media = 10;
            console.log(`Parabéns, você tem a média máxima, você é um aluno nota ${this.media}!`);
        }
    }
}

var aluno = new Aluno("Samuel", 32, 0);
if (aluno.calculaMedia(8, 9) === true) {
    console.log(`Parabéns, ${aluno.nome} você foi aprovado!`);
} else {
    console.log(` ${aluno.nome} infelizmente você não foi aprovado, tente outra vez!`);
}
aluno.notaExtra(2);
*/

/*DESAFIO 
Crie uma classe Usuario com os atributos email e senha. Em seguida, crie uma classe Sistema. 
A classe Sistema tem um método formatar, ela recebe como parâmetro um objeto usuário e exibe na tela o email do usuário oculto.
  
class Usuario {
    constructor(senha, email ){
        this.senha = senha;
        this.email = email;
    }
}

class Sistema {
    constructor (usuario){
        this.usarsio = usuario;
    }
    formatar(usuario){
        var separaEmail = usuario.email.split("@");
        var ocultaEmail = separaEmail[0][0] +"***@"+separaEmail[1];
        console.log(ocultaEmail);
    }
}

var usuario = new Usuario("José", "jrcarlos@gmail.com");
var sistema = new Sistema();

sistema.formatar(usuario); // mostra no console “j***@gmail.com”
*/