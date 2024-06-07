// PIPE COM ARG ASYNC PROMESSA QUE DORME ANTE DE DAR VALOR

// tecnica: fazer uma Promessa que executa uma funcionalidade dentro de um setTimeout

// nova promessa , que tambem devolve funcao e opcao de escolha de tempo de espera

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

// executadora da func de tempo e depois algum valor : 1° dorme, depois devolve valor
async function valueAsync5 () {
  await sleep(1000)
  return 5
}

// PIPE - COM ARGS

const fn1 = async (a) => await a + 10
const fn2 = async (a) => await a - 5

const list = [ fn1, fn2 ]

// como cada fn componente do pipe ja resolve a promessa, nao precisa resolver no pipe.

const pipe = async (a) => {
  return list.reduce((acc, fns) => {
    let resAcc = acc
    return fns(resAcc)
  }, a)
}

pipe( valueAsync5 () )
  .then((r) => console.log(r))
// resultado tem que ser 10