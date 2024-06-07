
// -- Base abstrata para todas entidades --
abstract class BasePerson<T> {
  public readonly args: T
  protected ID: string

  constructor(args: T, ID: string) {
    this.args = args
    this.ID = ID ?? Date.now().toString()
    // TODO INSERIR UM GERADOR DE HASH PARA ID
  }
}

// -- Types --
interface EntidadeModel extends MembersEntidade {
  texto1: string
  texto2: string
  num1: number
  num2: number
} // typeMerge com obrigatorios nos args

interface EntidadeModel {
  ID?: string
  computadoNum1_Num2?: number
} // typeMerge gurda aqui os opcionais nao utilizados para args.

type EntidadeRequest = Omit<EntidadeModel, 'ID' | 'computadoNum1_Num2'>

interface MembersEntidade {
  membro1?: () => string
  membroN1N2?: () => number
}

// -- Factory baseada na Base_Abstrata --

class FactoryEntidade extends BasePerson<EntidadeModel> {

  private constructor(args: EntidadeModel, ID: string) {
    super(args, ID)

    // Computar - sobreescreve até o request da instanciacao/criacao
    this.args.texto2 = this.membro1()
    this.args.computadoNum1_Num2 = this.membroN1N2()
  }

  static async newInstance(args: EntidadeModel, ID?: string) {
    return await new FactoryEntidade(args, ID!)
    // obs: se desempacotar o args aqui nao reconhece a computação dos membros.
  }

  // members
  membro1() {
    return `Computando ${this.args.texto1} com ${this.args.texto2} somado >> ${this.args.num1 + this.args.num2} .`;
  }

  membroN1N2() {
    return this.args.num1 + this.args.num2
  }
}

// maker
const entidadeMaker = async (args: EntidadeRequest, ID?: string) => {
  return await FactoryEntidade.newInstance(args, ID)
}

// -- requests --
const request1: EntidadeRequest = { texto1: 'texto1', texto2: 'texto2', num1: 10, num2: 20, }
const request2: EntidadeRequest = { texto1: 'texto_1_Request2', texto2: 'texto_2_Request2', num1: 10, num2: 20, }

// -- Uso Entidade --
const instancia1 = await entidadeMaker(request1)
const instancia2 = await entidadeMaker(request2)

console.log(instancia1)
console.log('MEMBRO1 INSTANCIA >>>>', instancia1?.membro1?.())

// tests prototype e instancia nas instancias
// true tem que apontar para o mesmo espaço na meroria :
console.log('true tem que apontar para o mesmo espaço na memoria :',
  instancia1.membroN1N2 === instancia2.membroN1N2)
// true as instancias tem que ser instancia da classe apontada
console.log('true as instancias tem que ser instancia da classe apontada',
  instancia1 && instancia2 instanceof FactoryEntidade)

/*
DETALHES
instancia_final: "desta forma as instancias finais ficaram com subObjetos inseridos na sua criacao ex: args, não é uma má ideia fica organizado suas props."

sub_objetos: nao precisa criar outros subObjetos igual o args, se precisar de subObjetos criar dentro do type do args/propsmesmo na tipagem, mesmo que sejam preenchidos pelo sistema igual o ID.
*/

export default 1