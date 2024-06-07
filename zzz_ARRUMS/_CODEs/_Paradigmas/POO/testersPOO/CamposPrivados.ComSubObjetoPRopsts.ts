// deno-lint-ignore-file no-unused-vars

// -- Criação entidadeFabrica via CLASSE

type MembrosEntidade = {
  metodo1?: string
}

interface IProps extends MembrosEntidade {
  campo1: Readonly<string>,
  campo2: string,
  campoComputavelPorMembro?: MembrosEntidade["metodo1"]
  // para campos computaveis posso configurar campo especifico herdado pela interface.
}


// classe_factory

class FactoryEntidade {
  constructor(private readonly props: IProps) {
    // se precisar computar algum campo faço no bloco da fucnao construtora.
    this.props.campoComputavelPorMembro = this.metodo1()
  }

  metodo1() {
    return `${this.props.campo1}_concatenei_para_Mudar_retorno`
  }
}

// -- MAKER --
const makeFactoryEntidade = (input: IProps) => new FactoryEntidade(input)

// -- USO --
const inputRequest = { campo1: 'valor Do campo1', campo2: 'bar' }

// I-- NSTANCIAS --
const instance1 = makeFactoryEntidade(inputRequest)

// tentar mudar valor props sem metodo
// como os campos sao privados - não acesso os campos fora e nem compila ao tentar.
// instance1.campo1 = 'fooooooo'

console.log(instance1)
// console.log(instance1.metodo1())

/*
* Segurança das props da classe entidade :
-- console.log(instance1.props.campo1 = 'zoaaa')// ok: as props soa privadas nao posso mudar fora da construcao

*
*/

export default 1