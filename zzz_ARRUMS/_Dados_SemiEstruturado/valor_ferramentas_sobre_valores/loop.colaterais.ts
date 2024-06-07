[
  {
    categoria: ["loops_colateais", "ferramentas_sobre_valores"],
    tipo: "funcao iteradora - faz algo a cada rodagemLoop",
    titulo: "for in",
    aplicabilidade: ["usar para percorrer um objeto"],
    conceito: "loop de possivel efeito colateral, qualquermudança nos valores será feita no valor original.",
    configuracao: `a primeiro transformavel variavelIteradora (let) vai peagr o valor operador <in> para operar no objeto e por ultimo apssa o objeto alvoTarget
    entao na consequencia pode recuperar com a variavel do objeto[na posicao da variavelIteradora ] assim teras o valor, se passar só a variavelIteradora teras em strings somente as chaves do objeto.`,
    exemplos: `
    const objTarget = { c1: 'rei', c2: 10, c3: true }

    for(let i in objTarget) {
      const valueObj = objTarget[i]
      if()
      console.log(valueObj)
    }

    // -- Response: 'rei' 10 true  :: o que mostrara a cada rodagem.
    `,
  },
]