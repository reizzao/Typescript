// deno-lint-ignore-file no-unused-vars
const ferramentas_ts = [
  {
    titulo: "",
    categorias: ["ferramentas_ts",],
    missao: "",
    contexto: "",
    conceito: "",
    observacoes: "#null",
  },
  {
    titulo: "generics typescript",
    categorias: ["ferramentas_ts",],
    missao: "configurador de tipos SUBSTITUÍVEIS, menos os que retornam operadores",
    contexto: "deixam os tipos SUBSTITUÍVEIS/Dinamicos, dando flexibilidade na hora de invocar/usar e tipar o artefato [sendo ele variável, objeto, função, classe, type]",
    conceito: `
    parametro generico precisa definir um tipo default na sua montagem, então configure como desconhecido ainda de inicio <unknown>, somente no uso será conhecido quando eu tipar sobreescrever este desconhecido default.
    `,
    observacoes: `
    -- Retornos que usam operadores não podem usar generics no artefato porque operadores ja tem seus tipos de retornos default nao podem ser substituidos que é a missão do generics é incompativel e tomará o erro : Operator 'OPERADOR USADO' cannot be applied to types

    -- delimitadoresde parametros genericos... diferente de funcoes que sao parenteses() em genericos são <> exemplo: <T>
    adicione os delimitadores de params genericos <> antes de () em constantes, em funcoesNomeadas insira os delimitadores depois do nomeIdentificador da funcao.

    convenção de Letras para Parametros genericos:
    T == Tipo
    S == State/stado
    K == Key/chave
    V == Value/valor
    E == Element/elemento frontend

    // exemplo:
    <T extends unknown,>  // o param T inicia como desconhecido na configuração, e será conhecido no uso quando eu tipar sobreescrever este desconhecido default.
    `,
  },
]
