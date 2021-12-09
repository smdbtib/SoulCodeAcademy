/*
 * Roteiro de Aula [06-12]
 * [X] Inicializador {}
 * [X] Propriedades
 * [X] Métodos
 * [X] Curso example
 * [X] Função construtora
 * [X] Criação de objetos com new
 * [X] Igualdade de objetos
 * [X] Array de objetos
 * [X] Exercício 1
 * [X] Correção + integrar objetos
 * [ ] Listagem de propriedades + valor
 * [ ] Usando arrow functions
 * [ ] Exercício 2
 */

var produto = {
    nome: "shampoo",
    preco: 10.5,
    desconto: 0.3,

    //CRIANDO MÉTODO DENTRO DO OBJETO
    mostrarProduto: function (){ // FUNÇÃO ANÔNIMA
        console.log("Segue o produto: \n Produto: " + this.nome+ "\n Preço: " +this.preco+  "\n Desconto: " +this.desconto);
    },
    aumentarPreco: function (acrescimo){
        this.preco  += acrescimo;
    },
    precoFinal: function (){
        return this.preco - (this.preco * this.desconto);
    }
};

produto.mostrarProduto();

produto.nome = "shampoo caro";
produto.preco = 12.5;



produto.aumentarPreco(3.5);
produto.aumentarPreco(3.5);
produto.mostrarProduto();

var final = produto.precoFinal();

console.log(final)



// CURSO EXEMPLO
var cursoJS = {
    nome: "Javascript",
    horas: 40,
    topicos: ["Lógica", "arrays", "objetos"],
    autor: {
        nome: "Carlos", 
        email: "carlos@gmail.com"
    },
    adicionaTopico: function (topico){
        this.topicos.push(topico)
    },
};

cursoJS.adicionaTopico("DOM");
console.log(cursoJS.topicos[0]);
console.log(cursoJS.autor.nome);

// CONSTRUTOR

function Curso(nome, horas, topicos, autor){
    this.nome = nome;
    this.horas = horas; 
    this.topicos = topicos;
    this.autor = autor; 
    this.adicionaTopico = function (topico){
        this.topicos.push(topico);
    };
}

var boorstrap = new Curso("Bootstrap", 40, ["Grid", "alerts"], {nome: "Samuel", email: "contato@gmail.coms"});

console.log(boorstrap)