/* *************************************************** */
// exemplo_antes_de_refatoracao:
// const getMultiplier = (multiplier: number) => {
//   return function (aNumber: number) {
//     return aNumber * multiplier;
//   };
// };

// refactor:
const getMultiplier = (multiplier: number) => (aNumber: number) =>
  aNumber * multiplier;

const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);
console.log(double(10), triple(10), quadruple(10));

/**
 * refatoracao_funcao_shortEncurtando:
 * trocar_em_funcao_anonima: "{ return :: por :: => arow_function"
 */

/* *************************************************** */
