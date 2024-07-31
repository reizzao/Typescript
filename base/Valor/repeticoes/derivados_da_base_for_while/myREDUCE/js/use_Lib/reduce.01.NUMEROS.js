import { useREDUCE } from "../js/../lib/lib.js";

const dadoOrigem = { c1: 10, c2: 10 };
let dadoAlvo = dadoOrigem.c1;
let inicial = 0;

const func1 = function () {
  return dadoAlvo;
}();

const func2 = function () {
  return dadoAlvo;
}();

const func3 = function () {
  return dadoAlvo;
}();

const listData = [func1, func2, func3];

// Dinamico é a operacao em cada dadoAlvo para acumular
function opSobreCadaAcumulados(itemAcumulado) {
  return itemAcumulado * 2;
}

// Dinamico é a operacao final no resultado da acumulacao final
function opFinalNoTotal(itemAcumulado) {
  return itemAcumulado + 1;
}

const resultREDUCE = useREDUCE(
  listData,
  opSobreCadaAcumulados,
  opFinalNoTotal,
  inicial,
);

console.log(resultREDUCE);
// console.log(dadoOrigem); // Obs: dado de origem nao é alterado

/*

*/
