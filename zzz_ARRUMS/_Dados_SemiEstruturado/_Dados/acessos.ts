[
  {
    titulo: "acesso interno as props do obj... dentro do metodo do proprio objeto em TS.",
    categorias: ["acessos", "acessos_objeto",],
    contexto: "acesso interno as props do obj... dentro do metodo do proprio objeto em TS.",
    conceito: "para acessar props em metodos tem que assinalar no metodo o this do tipo do objetoPai, o objetoPai tem que estar tipado ex: (this: TypeObjPai) assimé possivel acessar o thiscom as props do objeto.",
    observacoes: "o metodo no obj nao pode usar arrowFunction e na sua tipagem tem que retornar o que promete.",
    exemplos: `
    // Acessos internos dentro do proprio objeto
    interface ObjectType {
      key1: number
      method1: () => string
    }

    const object1: ObjectType = {
      key1: 2,
      method1(this: ObjectType) {
        return this.key1
      }
    }
    `,
  }
]