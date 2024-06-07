type Exemplo = { nome: string, sobrenome: string }

interface Repositorio {
  items: Exemplo[]
  criar(d: Exemplo): Exemplo
  mostrarCriados(): Exemplo[]
}

class RepositorioMemoria implements Repositorio {

  public items: Exemplo[] = []

  static instance() {
    return new RepositorioMemoria()
  }

  criar(d: Exemplo) {
    this.items.push(d)
    return d
  }

  mostrarCriados() {
    return this.items
  }
}

class RepositorioExterno implements Repositorio {

  public items: Exemplo[] = []

  static instance() {
    return new RepositorioExterno()
  }

  criar(d: Exemplo) {
    this.items.push(d)
    return d
  }

  mostrarCriados() {
    return this.items
  }
}

// criar somente 1 objeto apra fazer as tarefas do objetoClasse
const objRepositorioMemoria = RepositorioMemoria.instance()
const objRepositorioExterno = RepositorioExterno.instance()

// POLO UNICO USAR 1 OBJETO COMO REPO_IN_USO PARA SER UTILIZADO NOS METODOS
const repoInUSO_Entidade = objRepositorioExterno

const request1 = { nome: 'nome1', sobrenome: 'sobrenome1' }
const request2 = { nome: 'nome2', sobrenome: 'sobrenome2' }

// receba o repo que sera usado por param , ideal para poder testar qualquer tipo de repositorio em uso sem Alterar o original.
function useRepoCriar(request: Exemplo, repo: Repositorio) {
  repo.criar(request)
}

function mostrarTodosCriadosNoRepoInUso(repo: Repositorio) {
  return repo.mostrarCriados()
}

useRepoCriar(request1, repoInUSO_Entidade)
useRepoCriar(request2, repoInUSO_Entidade)

console.log('REPO IN USO', mostrarTodosCriadosNoRepoInUso(repoInUSO_Entidade))

export default 1

/*
CONTRATO ABSTRATO
padrao strateg, principio: OpenClose aberto para extensoes fechado para modificacoes

*/