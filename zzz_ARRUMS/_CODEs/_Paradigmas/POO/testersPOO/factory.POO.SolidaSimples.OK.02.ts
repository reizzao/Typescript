
interface EntityModel extends MembersEntity {
  ID?: string
  text1: string
  text2: string
  num1: number
  num2: number
  textStatico: string
}

interface MembersEntity {
  membro1?: () => string
}

class Entity {
  public readonly ID?: string

  public readonly text1!: string;
  public readonly text2!: string
  public readonly num1!: number
  public readonly num2!: number
  public readonly resultadoNum1Num2!: string

  static textStatico: string;


  constructor(args: EntityModel) {
    Object.assign(this, args)

    if (!this.ID) {
      this.ID = Entity.defaultID()
    }
    // computando campos com metodos auxiliares
    this.resultadoNum1Num2 = this.membro2()
  }

  membro1() {
    return `computado >> ${this.text1} ++ ${this.text2}`
  }

  membro2() {
    return `computando a soma dos campos num1+num2 resultado >> ${this.num1 + this.num2}`
  }

  static defaultID() {
    return `defaultID trazer a lib de ID aqui >> chamandoCampo >> ${Entity.textStatico}`
  }
}

const makeCreateEntity = (args: EntityModel) => {
  return new Entity(args)
}

// --Uso -- ----------------------------------------------
const request1: EntityModel = {
  text1: 'reinaldo', text2: 'programador', num1: 10, num2: 20, textStatico: 'Meu textoStatico'
}

const instance1 = makeCreateEntity(request1)
// instance1.text1 = 'foo' // ok era para dar erro na compilacao e deu !

console.log(instance1)
console.log(instance1.text1)
console.log(instance1?.membro1?.())
console.log(instance1?.membro2?.())

export default 1

/*
APRENDIZADO:

tecnica Classe Factory SolidaSimples

nao_precisa: "definir metodo create statico nao precisa porque as instancia serao criadas pelo poloUnico makeCreateEntity() unico a ser exportado deste arquivo."

tecnicaID: "tecnica ID , na maker new criacao pelo construtor posso passar um ID no 2º param, util caso se  já ID de onde o arg estiver sendo migrado, ou seja ta chegando tendo um ID aproveito este id ou crio um novo [todo: fazer esta logica]",

membros: "tem que ter instancia criada, a interface dos args extender os membros todos opcionais."

membros_utilitarios: "para ajudar a classe use membros static, para acesso ao membro chame o nome da classe ao inves do this.",
todo: "como dentro do membroStatico acesso as props da classe, porenqunato tentando as props sendo staticas tbm só pegaria as staticas. ???"

definicoes:
  prop_somenteLeitura: "assinlar com readonly :: para da erro na compilacao -> se por acidente tentarem reatribuir fora da classe sem metodo."

*/
