
interface ListObj { Campo1: string, Campo2: string }

const listObj: ListObj[] = [
  { Campo1: "foo1", Campo2: "foo11" },
  { Campo1: "foo2", Campo2: "foo22" },
  { Campo1: "foo3", Campo2: "foo333" },
]

function handleForEach (i: ListObj) {
  i.Campo1 = i.Campo1.toUpperCase()
}
// forEach - para cada item da lista - faça esta funcao
listObj.forEach(handleForEach)
// show array fonte original
console.log(listObj)

/*
forEach
traducao: para cada item passe essa funcao
recebe: uma funcao com 3 params
  1- o iterador sera o item atual a cada rodagem
  2 - param é o indice
  3 - aaram é o array inteiro

implementacao_manipulacao_na_funcao_callback_esperada:
- no loop vou manipular e mudar com efeitoColateral diretamente os items do arrayFonte
- para alterar direto no alvo - tenho que operar a mudanca e reatribuir ao proprio iteravel
-para ver mudancas vejo no proprio Fonte alterado.
*/
