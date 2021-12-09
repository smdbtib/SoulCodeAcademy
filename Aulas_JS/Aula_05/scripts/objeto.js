// OBJETO
console.log(`\nOBJETO`);

var autor = {
    assunto: "Assunto",
    nome: "John",
    email: "john@gmail.com",
    escreverLivro: function () {
      document.write(`<h1> ${assunto}</h1>`);
      document.write(`<h2>Livro bom</h2>`);
      document.write(`Lorem ipsum dolor sit amet consectetur adipisicing.`);
      document.write(`<br/> Lorem ipsum dolor sit amet consectetur adipisicing.`);
      document.write(`<br/> Lorem ipsum dolor sit amet consectetur adipisicing.`);
    },
  };

/*   function Autor(assunto, nome, email){
      this.assunto = assunto;
      this.nome = nome;
      this.email = email;
      this.escreverLivro = function (){
        document.write(`<h1> ${assunto}</h1>`);
        document.write(`<h1>Livro bom</h1>`);
        document.write(`Lorem ipsum dolor sit amet consectetur adipisicing.`);
        document.write(`<br/> Lorem ipsum dolor sit amet consectetur adipisicing.`);
        document.write(`<br/> Lorem ipsum dolor sit amet consectetur adipisicing.`);
      };
  } */
  
 /*  var autor1 = new Autor("FUNÇÃO / OBJETO / CONSTURTOR", "Samuel" , "smdb.ti@gmail.com");
  autor1.escreverLivro(); */

  // CLASS => CLASSES - ES6(ECMASCRIPT6)
  
  class Autor { 
      // CORPO DO CONSTRUTOR
      constructor(assunto, nome, email){
          this.assunto = assunto;
          this.nome = nome;
          this.email = email;
      }

      escreverLivro (){ 
        // CORPO DO MÉTODO
        document.write(`<h1> ${this.assunto}</h1>`);
        document.write(`<h2>${this.nome}</h2>`);
        document.write(`<h4>${this.email}</h4>`); 
      }

      escreveAsssuto(tema){
        document.write(`<br><h2> ${tema}</h2>`);
      }
  }

  // CRIANDO A INSTÂNCIA DO OBJETO
  var autor1 = new Autor("CLASSES / CONSTURTOR", "Samuel" , "smdb.ti@gmail.com");
  // CHAMANDO O MÉTODO
  autor1.escreverLivro();


  autor1.escreveAsssuto("EXECÍCIO 01 PERÍODO DA TARDE");
  // EXECÍCIO 01 PERÍODO DA TARDE
  /*
  1. Crie uma classe Pessoa com propriedades nome, sobrenome, peso, idade,
     e um método para calcular imc. IMC = peso / (altura x altura). 
   */

     class Pessoal {
         constructor(nome, sobrenome, peso, altura, idade){
             this.nome = nome;
             this.sobrenome = sobrenome;
             this.peso = peso;
             this.altura = altura;
             this.idade = idade;
         }
         
         calculaIMC(){
             var imc = (this.peso/(this.altura*this.altura)).toFixed(2);
            document.write(`<br> ${this.nome} seu IMC é: ${imc}`);
         }
         calculaNascimento (){
            var anoAtual = new Date().getUTCFullYear();
            var anoNascimento = anoAtual - this.idade;
            document.write(`<br><br> ${this.nome} seu ano de nascimento é: ${anoNascimento}`);
            // return anoNascimento;
         }

         //CUMPRIMENTAR
         relizarCumprimento (){
            document.write(`<br><br> Olá boa tarde, tudo bem?`);  
         }

         //DESPEDIR
         relizarDespedida (){
             document.write(`<br><br> Foi bom enquanto durou, mais estou indo nessa! Valeu obrigado!`);
         }

         //ENVELHECER
         fazerAniverario (anos){
            document.write(`<br><br>  Olá ${this.nome} hoje é seu aniversário, ganhou mais um ano de experiência, sua idade agora é: ${this.idade += anos}`);
         }

         //ENGORDAR
         ganharPeso (quilos){
            document.write(`<br><br>  Olá ${this.nome} suas férias chegrama ao fim, ganhou mais um peso extra, seu novo peso é : ${this.peso += quilos}`);
         }

         //EMAGRECER
         perderPeso (quilos){ 
             document.write(`<br><br>  Olá ${this.nome} parabéns, você se esforçou e perdeu peso, seu novo peso é : ${this.peso -= quilos}`);
         }
     }

var pessoa1 = new Pessoal ("Samuel", "Dias", 82, 1.80, 32);
pessoa1.calculaIMC();
pessoa1.calculaNascimento();
pessoa1.relizarCumprimento();
pessoa1.relizarDespedida();
pessoa1.fazerAniverario(10);
pessoa1.ganharPeso(3,5);
pessoa1.perderPeso(1);

autor1.escreveAsssuto("EXECÍCIO 02 PERÍODO DA TARDE");
// EXECÍCIO 02 PERÍODO DA TARDE
/* 
Crie um classe Animal com nome, idade, acordado(boolean) e método comer, dormir. O método comer recebe uma comida por parâmetro.
•	O animal não come se estiver dormindo
•	Quando o animal dormir, acordado deve ser false.
*/

class Animal {
    constructor(nome, idade){
        this.nome =  nome;
        this.idade = idade;
        this.acordado = false;
    }
    comer(alimento){
        if(this.acordado === true){
            document.write(`<br> ${this.nome} comeu! ${alimento}`)
        }else
            document.write(`<br> ${this.nome} dormindo, não comeu ${alimento} !`)
    }

    acordar(){
        this.acordado = true;
    }

    dormir(){
        this.acordado = false;
    }
}


var amy = new Animal("Amy", 12);

amy.comer("Cenoura");
amy.acordar();
amy.comer("Pimentão");
amy.dormir()
amy.comer("Pimentão");


/* 

This site has been acquired by Toptal.com.
(Attention! API endpoint has changed)
Apply as a Freelancer
Save New Duplicate & Edit Just Text1
var autor = {
  nome: "John",
  email: "john@gmail.com",
  escreverLivro: function () {
    document.write("<h1>Livro bom</h1>");
    document.write("Lorem ipsum dolor sit amet consectetur adipisicing.");
    document.write("<br/> Lorem ipsum dolor sit amet consectetur adipisicing.");
    document.write("<br/> Lorem ipsum dolor sit amet consectetur adipisicing.");
  },
};

// function Autor(nome, email) { // Função objeto/construtora
//   this.nome = nome;
//   this.email = email;
//   this.escreverLivro = function () {
//     document.write("<h1>Livro bom</h1>");
//     document.write("Lorem ipsum dolor sit amet consectetur adipisicing.");
//     document.write("<br/> Lorem ipsum dolor sit amet consectetur adipisicing.");
//     document.write("<br/> Lorem ipsum dolor sit amet consectetur adipisicing.");
//   };
// }
// var autor1 = new Autor("joseph", "jos@gmail.com");
// var autor2 = new Autor("mary", "mar@gmail.com");
// autor1.escreverLivro();
// autor2.escreverLivro();

// Classes ES6(ECMASCRIPT6)
class Autor {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  escreverLivro() {
    // MÉTODO
    document.write("<h1>Livro bom</h1>");
    document.write(this.nome + "<br/>");
    document.write("Lorem ipsum dolor sit amet consectetur adipisicing.");
    document.write("<br/> Lorem ipsum dolor sit amet consectetur adipisicing.");
    document.write("<br/> Lorem ipsum dolor sit amet consectetur adipisicing.");
  }
}

// var autor1 = new Autor("joseph", "jos@gmail.com");
// autor1.escreverLivro();

// Exercício
class Pessoa {
  constructor(nome, sobrenome, peso, altura, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.peso = peso;
    this.altura = altura;
    this.idade = idade;
  }

  calcularIMC() {
    return this.peso / this.altura ** 2;
  }

  anoNascimento() {
    var anoAtual = new Date().getFullYear();
    return anoAtual - this.idade;
  }
  // cumprimentar
  cumprimentar() {
    alert(`Olá!!!!!!!!!!!!!!!!!!!!!!!!! ${this.nome}`);
  }
  // despedir
  despedir() {
    alert(`Adeusss ${this.nome}`);
  }
  // envelhecer
  envelhecer(anos) {
    return (this.idade += anos);
  }
  // engordar
  engordar(quilos) {
    return `Você tinha ${this.peso} agora vc tem ${(this.peso += quilos)}`;
  }
  // emagrecer
  emagrecer(quilos) {
    return (this.peso -= quilos);
  }
}

// var pessoa1 = new Pessoa("José", "José", 80.5, 1.87, 34);
// pessoa1.cumprimentar();
// pessoa1.despedir();
// alert(pessoa1.envelhecer(15));
// alert(pessoa1.engordar(30));
// alert(pessoa1.emagrecer(20));
// alert(pessoa1.peso);
// alert(pessoa1.calcularIMC());
// alert(pessoa1.anoNascimento());

class Animal {
  constructor(nome, idade, comidaFavorita) {
    this.nome = nome;
    this.idade = idade;
    this.comidaFavorita = comidaFavorita;
    this.acordado = true;
  }

  dormir() {
    alert("zzzzZZZZZZZZ");
    this.acordado = false;
  }

  comer(comida) {
    if (this.acordado) {
      alert(`Hummmmmmm ;) ${comida}`);
    } else {
      if (comida === this.comidaFavorita) {
        this.acordado = true;
        alert(`Hummmmmm ;) ${this.comidaFavorita} é bom`);
      } else {
        alert("Uh I sleep....");
      }
    }
  }
}

var animal = new Animal("rex", 12, "uva"); // começa acordado
animal.comer("amendoim");
animal.comer("uva");
animal.comer("pão");
animal.dormir();
animal.comer("uva");
animal.comer(prompt("Digite a comida do animal"));
*/