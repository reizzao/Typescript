[
  {
    titulo: "investigar propriedades de objeto",
    categorias: ["estrutura_objeto", "investigacao", "membros_prototype_disponiveis_para_tipo_Object"],
    contexto: "hasOwnProperty /tradução:  tem a propriedade ?",
    conceito: "passa uma chave em string , retorna um boleano se existe a prop passada por string no objeto encadeado.",
    observacoes: "#null",
    exemplos: `
    const obj = { c1: 'vc1', c2: 'vc2' }
    // investigar de tem a prop passada se tiver faz algo
    if(obj.hasOwnProperty('c1')) {
      console.log('oi')
    }
    `,
  }
]

