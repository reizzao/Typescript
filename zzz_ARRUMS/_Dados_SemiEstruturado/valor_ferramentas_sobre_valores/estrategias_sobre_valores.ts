[
  {
    titulo: "checar se ja existe item em array de objeto",
    categorias: ["ferramentas_sobre_valores", "estrategias_valores", "metodos_de_array", "existe"],
    contexto: "com metodo find sobr eo array buscamos o item igual ao valor passado, retornamos um boleano se acharmos.",
    conceito: "metodo find - é uma orderFunction entao passamos uma variavelIteradora que retornará o objetoIterado.chave que definirmos com o valor igual ao que recebemos.",
    observacoes: "#null",
    exemplo: `
    const arr = [
      { c1: 'rei', c2: 10, c3: true },
      { c1: 'gu', c2: 10, c3: true },
      { c1: 'leo', c2: 10, c3: true },
    ]

    const existItemEmArrayDeObj = (d) => {
      const get = arr.find((i) => i.c1 == d)
      return !!get
    }
    console.log(existItemEmArrayDeObj('rei'))
    `
  }
]