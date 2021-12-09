function Pessoa(nome, idade, peso, altura){
    this.nome = nome;
    this.horas = idade; 
    this.peso = peso; 
    this.altura = altura;
    this.calculaIMC = function (){
        return  this.peso/(this.altura*this.altura);
    };
    this.imc = this.calculaIMC();
}


var pessoa1 = new Pessoa("Raiza", 33, 53, 1.65)
var pessoa2 = new Pessoa("Rafael", 4, 19, 1.10)

console.log(pessoa1.nome+" seu IMC é "+pessoa1.imc);
console.log(pessoa2);

// pessoa1.calculaIMC();



