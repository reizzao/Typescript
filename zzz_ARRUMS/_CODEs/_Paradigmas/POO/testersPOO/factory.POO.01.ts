
// -- Types --
interface ArgsEntidade extends MembersEntidade {
  ID?: string
  texto1: string
  texto2: string
  num1: number
  num2: number
}

interface MembersEntidade {
  metodoInstancias?: () => string
}

// -- Factory apartir da Base_Abstrata --

class FactoryEntidade {

  private constructor(private readonly args: ArgsEntidade) {
    // this.args = args
  }

  static async create(args: ArgsEntidade) {
    return await new FactoryEntidade({ ...args })
    // todo: se desempacotar o args aqui nao reconhece a computadocao dos membros.
  }

  // members
  metodoInstancias() {
    return `Ola sou metodo para todas istancias .. computando ${this.args.texto1} com ${this.args.texto2} computando numeros num1+num2 == >> ${this.args.num1 + this.args.num2} .`;
  }
}

// maker
const makerFactoryEntidade = async (args: ArgsEntidade, ID?: string) => {
  return await FactoryEntidade.create(args, ID)
}

// -- requests --
const request1: ArgsEntidade = {
  texto1: 'texto1',
  texto2: 'texto2',
  num1: 10,
  num2: 20,
}
const request2 = {
  texto1: 'texto_1_Request2',
  texto2: 'texto_2_Request2',
  num1: 10,
  num2: 20,
}

// -- Uso Entidade --
// makerFactoryEntidade(request1).then((ok: any) => console.log(ok))

const instancia1 = await makerFactoryEntidade(request1)
const instancia2 = await makerFactoryEntidade(request2)

console.log(instancia1)
console.log(instancia1?.metodoInstancias?.())

// console.log(instancia2)
// console.log(instancia2.metodoInstancias())

// verificando membros de instancia
// console.log(instancia1.metodoInstancias === instancia2.metodoInstancias) // R: true OK - aponta pro mesmo lugar na memoria