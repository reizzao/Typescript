/*
FOR IN - Loop em objeto em JS
Aplicabilidade: editando objeto com loop for in <for in usamos para ir direto no valor e temos a chave tambem.>
1- no loop crio a variavel que vai receber os valores, uso comando in dizendo qual é o alvo
2- pego o valor ex: alvo[variavelDoValor] e faço alguma operacao com este valor a cada loop
3- mesmo fora do escopo do loop abaixo tenho o alvoModificado com a operacao que mandei.
*/

// exemplo
let request = { c1: "foo1", c2: "foo2" }
for (let key in request) {
  request[key] += " -> add"
}
// console.log(request)
// ok depois do for a variavel foi afetada com a operacao que mandei

let request2 = { c1: 10, c2: 10 }
let novo2 = {}
for (let key in request2) {
  request2[key] *= 20
}
console.log(request2)
// ok depois do for a variavel foi afetada com a operacao que mandei