// REDUCE GENERICO

const dadoOrigem = { c1: 10, c2: 10 };
// const dadoOrigem = { c1: "ORIGINAL_1 --> ", c2: "ORIGINAL_22 --> " };
let dadoAlvo = 100;
// let dadoAlvo = dadoOrigem.c1;
// let dadoInicial = dadoAlvo;

const func1 = function () {
  return dadoAlvo;
}();
const func2 = function () {
  return dadoAlvo;
}();
const func3 = function () {
  return dadoAlvo;
}();

const arrayAlvo = [func1, func2, func3];

// by meuReduce
function acumulador(initial, item) {
  return initial += item;
}

// opSobreAcumulados : este é dinamico é a operacao que deseja fazer com o dadoAlvo
function opSobreAcumulados(itemAcumulado) {
  return itemAcumulado.c1 + 1000;
  // return itemAcumulado.c1 += "----OOOOO-----";
}
// TODO MUDAR SOMENTE A CHAVE c1 do dado alvo

// meuReduce para uso
const useMeuReduce = (array, initial) => {
  const arr = array;
  let operacao = initial;

  for (let i = initial; i < arr.length; i++) {
    operacao = acumulador(operacao, opSobreAcumulados(arr[i]));
  }

  return operacao;
};

const resultReduce = useMeuReduce(arrayAlvo, dadoOrigem.c1);

console.log(resultReduce);
// console.log(dadoAlvo);

/*

*/
