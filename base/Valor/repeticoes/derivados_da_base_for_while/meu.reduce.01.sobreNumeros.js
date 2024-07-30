// REDUCE SOBRE NUMERO

let dadoInicial = 0
const func1 = function () { return 10 }()
const func2 = function () { return 10 }()
const func3 = function () { return 10 }()

const arrayAlvo = [ func1, func2, func3 ]
// const arrayAlvo = [ 10, 10, 10 ]

// by meuReduce
function acumulador (initial, item) {
  return initial += item
  // += é a operacao que quero fazer entre os items para acumula-los e ter um resultado final
}

function opSobreAcumulados (itemAcumulado) {
	return itemAcumulado * 20
}

// meuReduce para uso
const useMeuReduce = (array, initial) => {

  const arr = array
  let operacao = initial

  for (let i = initial; i < arr.length; i++) {
    // console.log(arr[i])

    operacao = acumulador(operacao, opSobreAcumulados (arr[i]) )

  }

  return operacao

}

const res = useMeuReduce(arrayAlvo, dadoInicial)

console.log(res)


/*

*/
