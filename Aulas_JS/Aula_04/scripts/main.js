//Vetores ou listas em sistema simples de orientação.
const pares = [2, 4, 6, 8, 10, 12];
const produtos = [
  { id: 1, nome: "feijão", valor: 2.0, categoria: "alimentos" },
  { id: 2, nome: "arroz", valor: 5.0, categoria: "alimentos" },
  { id: 3, nome: "milho", valor: 3.0, categoria: "alimentos" },
  { id: 4, nome: "creme dental", valor: 2.5, categoria: "higiene" },
  { id: 5, nome: "sabonete", valor: 1.95, categoria: "higiene" },
  { id: 6, nome: "shampoo", valor: 9.8, categoria: "higiene" }
];
//Exemplo de amostragem dos vetores em console de navegação.
console.log("Lista de Pares: ", pares);
console.log("Listagem de Objetos Produtos: ", produtos);
//Manipulando as posições e do vetor para remoção e adição na estrutura.
produtos.splice(6, 0, {
  id: 7,
  nome: "condicionador",
  valor: 7.8,
  categoria: "higiene"
});
//Fracionamento de vetores com estrutura de dados orientada por etiquetas.
const nomes = produtos.map((produtos) => produtos.nome);
//Exemplo de vetor
console.log("Listagem de Nomes dos Produtos: ", nomes);
//Aplicação de Cálculos ao map com promessa de retorno da estrutura.
const proximosPares = pares.map((x) => x + 12);
//Exemplo de cálculo com estrutura.
console.log("Cálculo de Próximos Pares: ", proximosPares);
//Usando a Estrutura para filtar a estrutura de dados.
const higiene = produtos.filter((p) => p.categoria === "higiene");
//Resultado do filtro da estrutura.
console.log(higiene);
//Juntando as funções de filtros e operadores.
const alimentos = produtos
  .filter((p) => p.categoria === "alimentos")
  .map((alimentos) => (alimentos.valor * 1.05).toFixed(2));
//Mostrando a junção das funções.
console.log("Preço dos Alimentos com ajuste: ", alimentos);
//Função de tratamento unitário a vetor.
const total = produtos.reduce((acumulo, p) => acumulo + p.valor, 0);
console.log("Soma do vetor: ", total);


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

// alunos.splice(0, 1, {id: 13, nome: "Marcos", sobrenome:"Rosa", nascimento: "12/02/1995", rg: "45.862.552-9" , cpf: 35644671241, genero:"M", renda: 2750.00 });

console.log(alunos);

const nomeCompleto = alunos.map((alunos) => alunos.nome + " " + alunos.sobrenome);
console.log("Nomes completos:\n" + nomeCompleto);

const rendaBase = alunos.map((alunos) => alunos.renda);
console.log("Rendas:\n" + rendaBase);

console.log(alunos);

//Atividade Prática de Fixação:
//1 - a) Percorra todo vetor mostrando a renda dos alunos em percentual de 35% no console do navegador.
const rendaPercent = alunos.forEach((alunos, index) => {
  console.log(`Renda percentual  ${(alunos.renda * 0.35).toFixed(2)}`);
});


//1 - b) Depois mostre os alunos no console somente do sexo feminino. Mostrando assim seu genero e seu nome e renda.
const gerenoFeminino = alunos.filter((alunos) => alunos.genero === "F");
gerenoFeminino.forEach((alunos, index) => {
  console.log(
    `Genero ${alunos.genero} - Nome: ${alunos.nome} - Renda: ${alunos.renda}`
  );
});

//2 - Mostre o indexação do aluno, seu nome, seu sobrenome e sua renda com margem de empréstimo (renda * 0.25) com duas casas decimais.
const apresentaEmprestimo = alunos.forEach((alunos, index) => {
  console.log(
    `Id.${alunos.id} -- Nome ${alunos.nome} ${alunos.sobrenome} Renda: ${alunos.renda} Margem para empréstimo: [${(alunos.renda * 0.25).toFixed(2)}]`
  );
});

//3 - Monte uma linha de comando que mostre no terminal a média da renda dos alunos usando o comando “reduce”
//    como base para acumulação dos valores.
const rendaMedia = (alunos.reduce((acumuloRenda, alunos) => (acumuloRenda + alunos.renda), 0) / alunos.length);
console.log(`Renda média ${(rendaMedia).toFixed(2)}`);





