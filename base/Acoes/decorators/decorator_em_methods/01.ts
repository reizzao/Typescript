/*
- fazer a funcao decoradora : que sera o que eu quero fazer com o resultado do meu metodoAlvo
- a funcao decoradora sempre retorna uma funcao - funcao essa que recebe 3 params :
return (target: any, key: string, descriptor: PropertyDescriptor) => {}
1º -> target : que é o prototype
2º -> key : que é o nome do metodo
3º descriptor : que descreve a propriedade - um objeto com campos da propriedade que podemos usar ex: ele é do tipo PropertyDescriptor : tem os campos opcionais usaveis :
configurable?,
enumerable?,
value? : este value é o retorno do metodoAlvo com esta prop. value podemos fazer algo com o retorno do metodoAlvo
wrintable,
get?
set?

importantes: [
  - o methodDecorator nao funciona em funcoes soltas .. somente em metodos de classe
  - o retorno do retorno da funcao decoradora tem que ser do mesmo tipo do metodoAlvo,
  -
]
logica_da_funcao_decoradora: [
  - 1º salvar o metodo_Alvo_Original
  - 2º reescreve o metodoAlvo
  - 3º nesta reescrita : devolve o metodo original.apply passando os args recebidos este é o retorno do metodoAlvo e com ele faço alguma operacao.
  - 4º por ultimo: devolve o param descriptor : ja manipulado
]

*/

function SomandoComNumero(num: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // faço algo com as props do metodoAlvo (target, key, descriptor)

    let originalMethod = descriptor.value

    descriptor.value = function (...args: number[]) {
      return originalMethod.apply(this, args) + num
    }

    return descriptor
  }
}

class Foo {

  @SomandoComNumero(500)
  somar(num: number) {
    return num
  }
}

const i1 = new Foo()
console.log(i1.somar(1000))

// nao funciona em funcoes soltas .. somente em metodos de classe
// @SomandoComNumero(500)
// function somarSolta(num: number) {
//   return num
// }
// console.log(somarSolta(1000))

export default 1