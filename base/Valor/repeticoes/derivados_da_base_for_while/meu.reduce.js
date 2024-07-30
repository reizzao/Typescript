const arrayAlvo = [10, 10, 10];

const meuReduce = (array, initial) => {
  const arr = array;
  let operacao = initial;

  for (let i = initial; i < arr.length; i++) {
    // console.log(arr[i])
    // += é a operacao que quero fazer entre os items para acumula-los e ter um resultado final
    operacao += arr[i];
  }

  return operacao;
};

const res = meuReduce(arrayAlvo, 0);

console.log(res);

/*
Reduce: significado: reduzidor
objetivo: reduzir varios dados em somente um dado.

implementacao do reduce pronto :
- recebe no 1º arg uma funcao que vai ser executada para cada elemento do array.
- no 2º arg recebe opcionalmente o valor de inicio do alvo.

implementacao do reduzidor :
- recebe um acumulador, e o item do arrayAlvo para serem usados a cada volta do loop.
- por consequencia vamos fazer a operacao desejada com esses parametros o que acumula pra usar o que foi acumulado com o itemDoArrayAlvo no momento da volta.
-- o que esta acontecendo : o param acumulador primeiro vai receber o valor inicial definido,
-- o param itemDoArray vai receber o item do do arrayAlvo por justa_ordem e vai fazer o operacao definida por consequencia.


*/
