
const tipagens_comuns_ts = [
  {
    titulo: "tipar retorno -> ",
    categorias: ["tipagens_comuns_ts",],
    contexto: "",
    conceito: "",
    observacoes: "o que voce usou de retorno tem um tipo, entao use o seu tipo de origem na tipagem... motivação: sempre tipar ja me custou 1 dia de erros ao nao passar um param.",
  },
  {
    titulo: "evite tipar com any :: faça genric e tipe com unknown",
    categorias: ["tipagens_comuns_ts",],
    contexto: "se ainda nao sei qual será o tipo, mas informarei no uso - use generic e tipe como unknown não tipe como any que pode ser qualquer coisa...porque nao será qualquer coisa terá um tipo flexivel usando generic, só começará por default desconhecido.",
    conceito: "não tipe generico com any, tipe com ainda desconhecido <unknown>",
    observacoes: "o que voce usou de retorno tem um tipo, entao use o seu tipo de origem na tipagem... motivação: sempre tipar ja me custou 1 dia de erros ao nao passar um param.",
  },
  {
    titulo: "tipar loop reduce ()",
    categorias: ["tipagens_comuns_ts",],
    contexto: "exemplo: (acc: unknown, validatorsFN: Function[])",
    conceito: "1º param é o acumulador tipar com o tipo que vai retornar os valores ou generico a receber o tipo ainda, 2º param tipar com o tipo Construtor do artefato que esta mandando repetir iterar, no exemplo estou mando iterar um array de funcoes entao tipo como Function[]",
    observacoes: "o que voce usou de retorno tem um tipo, entao use o seu tipo de origem na tipagem.",
  },

  {
    titulo: "tipar retorno -> throw",
    categorias: ["tipagens_comuns_ts",],
    contexto: "não precisa tipar, mas se for tipar tipe copmo void/vazio.",
    conceito: "não precisa tipar, mas se for tipar tipe copmo void/vazio.",
    observacoes: "o que voce usou de retorno tem um tipo, entao use o seu tipo de origem na tipagem.",
  },
  {
    titulo: "tipar -> default parametro generico",
    categorias: ["tipagens_comuns_ts",],
    contexto: "parametro generico precisa definir um tipo default na sua montagem, então configure como desconhecido ainda de inicio <unknown>, somente no uso será conhecido quando eu tipar sobreescrever este desconhecido default.",
    conceito: "configure que extende de desconhecido de inicio >>> <T extends unknown,>",
    observacoes: "exemplo: <T extends unknown,>  // o param T inicia como desconhecido na configuração, e será conhecido no uso quando eu tipar sobreescrever este desconhecido default.",
  },
]