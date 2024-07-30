// REDUCE SOBRE OBJETO

let dadoAlvo = { c1: "A", c2: "B"}
let dadoInicial = dadoAlvo

const func1 = function () { return dadoAlvo }()
const func2 = function () { return dadoAlvo }()
const func3 = function () { return dadoAlvo }()

const arrayAlvo = [ func1, func2, func3 ]

// by meuReduce
function acumulador (initial, item) {
  return initial += item
  // += é a operacao que quero fazer entre os items para acumula-los e ter um resultado final
}

function opSobreAcumulados (itemAcumulado) {
  // let dadoAlvo = dadoAlvo
	return itemAcumulado.c1 += "----OOOOO-----"
}
// TODO MUDAR SOMENTE A CHAVE c1 do dado alvo

// meuReduce para uso
const useMeuReduce = (array, initial) => {

  const arr = array
  let operacao = initial

  for (let i = initial; i < arr.length; i++) {

    operacao = acumulador(operacao, opSobreAcumulados (arr[i]) )

  }

  return operacao

}

const res = useMeuReduce(arrayAlvo, dadoInicial)

// console.log(res)
console.log(dadoAlvo)


/*

*/
