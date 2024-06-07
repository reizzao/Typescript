/*
higher_order_function: funcoes_de_ordem_superior
conceito: sao apenas as funcoes que recebem uma funcao e retornam uma funcao... ao inves de receber e retornar capsulas sem funcionalidade.

aplicabilidade: se tiver que criar varias funcoes que o que muda entre elas é só
o retorno do que é retornoFixoMarretado mude para retorno de funcaoAnonima, crie uma funcao com
o nome que faça a junçao destas e substitua esta variavel por uma funcao,
recebendo-a e retornando a e quem for usar/invocar argumenta esta variavel.

*/

// legado
// function double(aNumber: number) {
//   return aNumber * 2
// }
// function triple(aNumber: number) {
//   return aNumber * 3
// }
// function quadruple(aNumber: number) {
//   return aNumber * 4
// }

// ao inves de fazer estas 3 funcoes - que duplica, triplica, quadruplica uma varMarretada - faça uma funcao generica que recebe uma funcao e retorna uma funcao onde este fatorVariavel seja o arguemnto em funcao.

// exemplo_antes_de_refatoracao:
// const getMultiplier = (multiplier: number) => {
//   return function (aNumber: number) {
//     return aNumber * multiplier;
//   };
// };

// refactor:
const getMultiplier = (multiplier: number) => (aNumber: number) =>  aNumber * multiplier;

/**
 * refatoracao_funcao_shortEncurtando:
 * trocar_em_funcao_anonima: "{ return :: por :: => arow_function"
 */

/*
analise: uma nova funcaoDeOrdemSuperior - que recebe uam funcao - que retorna uma funcaoAnonima que com a mesma assinatura do que seria a funcaoMarretadaSemOrdemSuperior recebendo o mesmo paramAlvo e seu retorno seria este param operando com o variavelParamFuncao recebido na orderFunction

uso: instanciar a orderFunction passando o argDinamico da operacao que precisa o retorno da funcaoanonimaRetornado - neste resultado que agora é uma funcao passo o arg que vai operar com o arg da anonima e uso o resultadoGuardado.
*/

const double = getMultiplier(2);
console.log(double(10));

const triple = getMultiplier(3);
console.log(triple(10));

const quadruple = getMultiplier(4);
console.log(quadruple(10));
