// deno-lint-ignore-file no-unused-vars
/*
Desestruturacao de array
traducao: extrair items do array

observacao: desestruturacao de array use  colchetes [] ao inves de chaves.

*/

// forma manual legado - tem que criar nova var pra receber o resultado e acessar as posicoes do array alvo
// const posicao1 = array1[0];
// const posicao2 = array1[1];
// console.log(posicao1, posicao2);

// pega valores de um array e coloca em novas variaveis
const array1 = [1, 2, 3, 4, 5];

// forma moderna - copiar props de array
const [pega1, pega2] = array1;
// console.log(pega1, pega2);

// copiando pegando posicoes e o restante
const [p1, p2, ...restanteArray] = array1;
// console.log(p1, p2, restanteArray);

// na copia :: pular indices do array separe por justa posicao a posicao e nao coloque nada deixe espaço
const [x1, , x3, ...rest2] = array1; // pegou as posicoes 1, 3 e o resto, pulou a posicao 2 indicada como ESPAÇO
console.log(x1, x3, rest2);
