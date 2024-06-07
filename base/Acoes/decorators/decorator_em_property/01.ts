
/**
 * @desc Decoracao em Propriedade : PropertyDecorator
 * @aplicabilidades bom para [ validacaoDeCampos, ]
 * @importante no deno o propertyDecorator só funciona se a propAlvo tiver a marcacao declare
 * @input para property recebemos 2 params : [ target: que é o prototype da classeAlvo, e key: que é o nome da propriedadeAlvo,]
 * @return uma estrutura
 * @example ...'
 */


function minTamanho(length: number) {

  return (target: any, key: string) => {

    let _value = target[key]

    const getter = () => _value

    const setter = (value: string) => {

      if (value.length < length) {
        throw new Error(`Ops o valor minimo é ${length} ... voce passou somente ${key}`)
      }
      _value = value
    }

    // tem que definir no objeto qual é o get e qual é o set

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true
    })

  }

}

class classeAny1 {

  @minTamanho(3)
  declare titulo: string

  constructor(t: string) {
    this.titulo = t
  }

}

// const i1 = new Filme("anyFilme")
const i2 = new classeAny1("aa")

// console.log(i1)
console.log(i2.titulo)

export default 1
