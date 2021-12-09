// Herança
class Animal {
    constructor(nome, idade, comidaFavorita) {
        this.nome = nome;
        this.idade = idade;
        this.comidaFavorita = comidaFavorita;
        this.acordado = true;
        this.bucho = [];
    }

    dormir() {
        console.log("Estou dormindo... zzzZZZZZZ");
        this.acordado = false;
    }

    acordar() {
        console.log("Tão cedo assim???");
        this.acordado = true;
    }

    comer(comida) {
        console.log(`Comendo ${comida}`);
        this.bucho.push(comida);
    }
}

var animal = new Animal("rex", 12, "uva");
console.log("Vamos que vamos!");
/* 
animal.comer("uva");
animal.comer("pão");
animal.comer("peixe");
 */


// HERANÇA => extends 
class Gato extends Animal {
    constructor(nome, idade, comidaFavorita) {
        super(nome, idade, comidaFavorita); // Referência a para o contrutor da classe PAI
    }

    miar() {
        console.log(`Miar.`)
    }

    comer(comida){// SOBREESCREVENDO O MÉTODO SO PAI
        if(comida !== "pedra"){
            super.comer(comida);// CHAMANDO MÉTODO SUPER PARA COMER
        }else{
            console.log("Não vou comer não! ");
        }
    }
}

var miau = new Gato("Frajola", 2, "peixe");

miau.comer("peixe");
console.log(miau.nome);
miau.dormir();
miau.acordar();
miau.miar();

// ATIVIDADE 01
// Criem uma classe Cachorro com método latir e propriedade
// adicional raça.

class Cachorro extends Animal {
    constructor(nome, idade, comidaFavorita, raca) {
        super(nome, idade, comidaFavorita);
        this.raca = raca;
    }

    latir() {
        console.log(`Auauau auauau`);
    }
}

var dog = new Cachorro("Amy", 14, "Cenoura", "Dachshund ");

dog.latir();
console.log(dog.raca);

miau.comer("pedra") //CHAMANDO MÉTODO SUPER PARA COMER SOBREESCREVENDO O MÉTODO SO PAI


class Petshop{
    constructor() {
        this.pets = [];
    }

    novoServico(animal) {
        this.pets.push(animal);
    }

    alimentar(comida) {
        this.pets.forEach((pet) => {
            pet.comer(comida);// POLIMORFISMO
        });
    }
}

var petshop = new Petshop();

petshop.novoServico(dog);
petshop.novoServico(miau);
console.log(petshop.pets);
petshop.alimentar("pedra");

// ATIVIDADE 02 
/*
    1.	Crie uma classe Pessoa com nome e idade, e método se apresentar.
    2.	Crie uma classe Aluno(extends Pessoa) com atributos média.
    3.	Crie uma classe Professor(extends Pessoa) com atributos disciplina.
    4.	Crie uma classe Monitor(extends Professor) com atributos cargaHoraria.
 */

class  Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`\nOlá meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, media){
    super(nome, idade);
    this.media = media;
    }
    apresentar(){
        super.apresentar();
        console.log(`Minha média é ${this.media}`);
    }
}

class Professor extends Pessoa{
    constructor(nome, idade, disciplina){
        super(nome, idade);
        this.disciplina = disciplina;
    }
    apresentar(){
        super.apresentar();
        console.log(`Sou um professor, vou dar aula de ${this.disciplina}!`);
    }
}

class Monitor extends Professor{
    constructor(nome, idade, disciplina ,cargaHoraria){
        super(nome, idade, disciplina);
        this.cargaHoraria = cargaHoraria;
    }
    apresentar(){
        console.log(`\nOlá meu nome é ${this.nome} e tenho ${this.idade} anos!`);
        console.log(`Sou monitor minha monitoria é em ${this.disciplina} com carga horária de ${this.cargaHoraria}`);
    }
}


var pessoa = new Pessoa ("Samuel", 32);
pessoa.apresentar();

var aluno = new Aluno ("André", 32, 8.5);
aluno.apresentar();

var prof = new Professor ("José", 22, "JavaScript");
prof.apresentar();

var monitor = new Monitor ("Gisele", 25, "Node", 40);
monitor.apresentar();

// CODE PROFESSOR 
/*
This site has been acquired by Toptal.com.
(Attention! API endpoint has changed)
Apply as a Freelancer
Save New Duplicate & Edit Just Text1

// Herança
class Animal {
  constructor(nome, idade, comidaFavorita) {
    this.nome = nome;
    this.idade = idade;
    this.comidaFavorita = comidaFavorita;
    this.acordado = true;
    this.bucho = [];
  }

  dormir() {
    console.log("Estou dormindo... zzzZZZZZZ");
    this.acordado = false;
  }

  acordar() {
    console.log("Tão cedo assim???");
    this.acordado = true;
  }

  comer(comida) {
    if (this.acordado) {
      console.log(`Comendo ${comida}`);
      this.bucho.push(comida);
    } else {
      console.log("Estou dormindo");
    }
  }
}

class Gato extends Animal {
  constructor(nome, idade, comidaFavorita, cor) {
    super(nome, idade, comidaFavorita); // Classe-pai
    this.cor = cor;
  }

  miar() {
    console.log("Miau.");
  }

  acordar() {
    this.miar();
    super.acordar();
  }

  // Sobrescrita de métodos
  comer(comida) {
    if (comida !== "pedra") {
      super.comer(comida); // estou chamando o método do pai.
    } else {
      console.log("Tá doido?");
    }
  }
}

// Criem uma classe Cachorro com método latir e propriedade
// adicional raça.
class Cachorro extends Animal {
  constructor(nome, idade, comidaFavorita, raca) {
    super(nome, idade, comidaFavorita); // Classe-pai
    this.raca = raca;
  }

  latir() {
    console.log("Auau");
  }

  comer(comida) {
    this.latir();
    super.comer(comida);
  }
}

class Petshop {
  constructor() {
    this.animais = [];
  }

  novoServico(animal) {
    this.animais.push(animal);
  }
  // SUPERCLASSE = CLASSE PAI
  // SUBCLASSE = CLASSE FILHA
  alimentar(comida) {
    this.animais.forEach((animal) => {
      animal.comer(comida); // POLIMORFISMO
    });
  }
}

var gato1 = new Gato("fred", 3, "peixe", "laranja");
var cachorro1 = new Cachorro("rex", 5, "carne", "vira-lata");
var petshop = new Petshop();

// petshop.novoServico(gato1);
// petshop.novoServico(cachorro1);
// petshop.alimentar("pedra");

// petshop.alimentar("pedra");

// Exercício
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Oi eu sou ${this.nome} e tenho ${this.idade} ano(s)`);
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, media) {
    super(nome, idade);
    this.media = media;
  }

  apresentar() {
    console.log(
      `Oi sou o estudante ${this.nome}, tenho ${this.idade} ano(s) e tenho média=${this.media}`
    );
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }

  apresentar() {
    console.log(
      `Oi sou o professor ${this.nome}, leciono ${this.disciplina} e tenho ${this.idade} ano(s)`
    );
  }
}

class Monitor extends Professor {
  constructor(nome, idade, disciplina, cargaHoraria) {
    super(nome, idade, disciplina);
    this.cargaHoraria = cargaHoraria;
  }

  apresentar() {
    console.log(
      `Oi sou o monitor ${this.nome}, leciono ${this.disciplina}, tenho ${this.idade} ano(s) com carga horária=${this.cargaHoraria}H`
    );
  }
}

var pessoa = new Pessoa("José", 19);
var aluno = new Aluno("José", 23, 8.35);
var professor = new Professor("José", 29, "NODEJS");
var monitor = new Monitor("José", 24, "ANGULAR13", 40);

var pessoas = [aluno, pessoa, professor, monitor];

pessoas.forEach((pes) => {
  pes.apresentar();
}); 
 */