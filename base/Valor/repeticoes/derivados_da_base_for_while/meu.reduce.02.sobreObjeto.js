// REDUCE SOBRE OBJETO

let dadoInicial = ""
let dadoAlvo = "A"

const func1 = function () { return dadoAlvo }()
const func2 = function () { return dadoAlvo }()
const func3 = function () { return dadoAlvo }()

const arrayAlvo = [ func1, func2, func3 ]

// by meuReduce
function acumulador (initial, item) {
  return initial = item
  // += é a operacao que quero fazer entre os items para acumula-los e ter um resultado final
}

function opSobreAcumulados (itemAcumulado) {
	return itemAcumulado += "----OOOOO-----"
}

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

console.log(res)


/*

*/
