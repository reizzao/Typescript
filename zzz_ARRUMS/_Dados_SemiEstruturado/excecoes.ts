const excecoes = [
  {
    titulo: "relançar exceção.",
    categorias: ["excecoes", "validacoes",],
    contexto: "Se estiver manipulando lançamento de excessao, capture e relance o erro",
    conceito: `
    "importante em validações, na lib o que tiver recebendo replique/relance a exceção, se tiver recebendo um throw , capture este error com catch, e replique do jeito que recuperou relançando a replica de outro throw com o err capturado, passando o lançamento para frente... porque não da certo ficar passando o throw entre camadas sem relançar/replicar... mas se  relançar para frente a cada camada ai sim da certo. ex: exemplo de sucesso é a lib objectValues firstname que captura um throw e relana outro throw com o err capturado...ai sim quem usou capturou a exceção com seus membros de Error e pode manipular.",
    `,
    observacoes: "#null",
  }
]