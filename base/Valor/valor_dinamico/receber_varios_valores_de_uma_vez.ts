/**
 * @desc recebe Varios Valores De Uma Vez
 * @input com 3 pontos e o nome do objeto que ira guardar o array de valores de entrada recebemos varios valores
 * @return uma estrutura Array com os valores recebidos
 * @example receberVariosValoresDeUmaVez("um", "dois", "tres")
 */

function receberVariosValoresDeUmaVez(...args: any) {
  return args
}

console.log(receberVariosValoresDeUmaVez("um", "dois", "tres"))
