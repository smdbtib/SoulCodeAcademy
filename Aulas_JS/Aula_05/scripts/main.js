console.log("Vamos que vamos!");

const produtos = [
    { id: 1, nome: "feijão", valor: 8.0, categoria: "alimentos" },
    { id: 2, nome: "arroz", valor: 5.0, categoria: "alimentos" },
    { id: 3, nome: "milho", valor: 3.0, categoria: "alimentos" },
    { id: 4, nome: "creme dental", valor: 2.5, categoria: "higiene" },
    { id: 5, nome: "sabonete", valor: 1.95, categoria: "higiene" },
    { id: 6, nome: "shampoo", valor: 9.8, categoria: "higiene" },
    { id: 6, nome: "condicionador", valor: 12.8, categoria: "higiene" }
  ];


// PERCORRENDO VETOR COM O FOREACH
console.log(`\nPERCORRENDO VETOR COM O FOREACH`);
let impostoHigiene = 1.023;
var impostoAlimentos = 1.003;
produtos.forEach((produtos, index) => {
    // console.log( ` (Index ${index}) => (Produto ${produtos.nome})`)
    console.log( ` (${index}) ${produtos.nome}: [${(produtos.valor * impostoHigiene).toFixed(2)}] `);
 });

 
// EXEMPLO DE FILTRO DE DADOS EM FONTE DE VETOR
console.log(`\nFILTRO DE DADOS EM FONTE DE VETOR`);
const higiene = produtos.filter((produtos) => produtos.categoria === "higiene");
const alimento = produtos.filter((produtos) => produtos.categoria === "alimentos");
console.log(higiene);
console.log(alimento);


//REDUCE ACUMUADOR
console.log(`\nREDUCE ACUMUADOR `);
const somaValores = produtos.reduce((acumulo, produtos) => (acumulo + produtos.valor), 0);
console.log( `Valor de todos os produtos no carrinho: ${somaValores}` );
console.log( `Valor médio de todos os produtos no carrinho: ${(somaValores/produtos.length).toFixed(2)}` );

//CODIGO PROFESSOR
console.log(`\nCODIGO PROFESSOR`);
// Exemplo de filtragem em fonte de vetor.
const alimentos = produtos.filter(
  (produtos) => produtos.categoria === "alimentos"
);
console.log(`Imposto Sobre Higiene: `);
higiene.forEach((higiene, index) => {
  console.log(
    `${index}) ${higiene.nome}: [${(higiene.valor * impostoHigiene).toFixed(2)}]`
  );
});
console.log(`\nImposto Sobre Alimentos: `);
alimentos.forEach((alimentos, index) => {
  console.log(
    `${index}) ${alimentos.nome}: [${(
      alimentos.valor * impostoAlimentos
    ).toFixed(2)}]`
  );
});

//CRIANDO UM NOVO VETOR PARA ARMAZENAR OS DADOS ALTERADOS UILIZANDO FILTER COM O MAP
console.log(`\n NOVO VETOR PARA ARMAZENAR OS DADOS ALTERADOS `);

const alimentos2 = produtos
  .filter((produtos) => produtos.categoria === "alimentos")
  .map((alimentos) => (alimentos.valor * impostoAlimentos).toFixed(2));
console.log(alimentos2);
const higiene2 = produtos
  .filter((produtos) => produtos.categoria === "higiene")
  .map((higiene) => (higiene.valor * impostoHigiene).toFixed(2));
console.log(higiene2);


