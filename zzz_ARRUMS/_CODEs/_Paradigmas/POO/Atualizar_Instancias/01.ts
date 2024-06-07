// deno-lint-ignore-file prefer-const
type Arg = { ID?: string, campo1: string, campo2: string, foo?: string }

class Ent {
  private args!: Arg
  constructor(private readonly obj: Arg, s: string) {
    this.args = obj
  }
  async createInRepo(obj: Arg) {
    return await makeRepo.create(obj)
  }

}

class Repo {
  public items: Arg[] = []

  async create(obj: Arg) {
    await this.items.push(obj)
    return await obj
  }

  async list() {
    return await this.items
  }

  async getByID(ID: string) {
    const found = await this.items.find((i) => i.ID === ID)
    return await found
  }

  async updateByID(ID: string, newValue: Arg) {
    let found: Arg = await this.items.find((i) => i.ID === ID)!
    found.campo1 = newValue.campo1
    found.campo2 = newValue.campo2
    return await found
  }

}

const request1: Arg = { ID: '1', campo1: 'req1', campo2: 'req11' }
const request2: Arg = { ID: '2', campo1: 'req2', campo2: 'req22' }
const requestUp: Arg = { campo1: 'newValueByUpdate', campo2: 'kkk' }
const requestUp2: Arg = { campo1: 'MUDADO_DENOVO_2', campo2: 'kkk' }
const makerEnt = new Ent(request1, 'bar')
// console.log(makerEnt)

const makeRepo = new Repo()

const instance1: Arg = await makerEnt.createInRepo(request1)
const instance2: Arg = await makerEnt.createInRepo(request2)
// console.log(await makeRepo.list())

// console.log(await makeRepo.getByID('2'))

await makeRepo.updateByID('1', requestUp)
console.log(await makeRepo.list())

await makeRepo.updateByID('1', requestUp2)
console.log(await makeRepo.list())


/*
LICOES:
- titulo: setar valor de campos da classe: #evitar setar via setter na propria classe pela dificuldade de atribuir depois o metodo async,
solucao: #melhordosMundos os metodos que vao agir nas instancias e que iria criar no prototype na classe faça no repositorio ..e depois use um makerDoRepositorio para usar.
*/


export default 1