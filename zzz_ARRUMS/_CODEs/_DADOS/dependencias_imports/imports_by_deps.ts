// deno-lint-ignore-file no-unused-vars

const imports_by_Deps_subDeps = {
  dependencias:
    "tanto em modulos ou arquivos de test sempre puxar as dependencias do deps.",

  convencao_nomes: {
    primeiroNivelModular: "deps",
    segundoNivelModular: "subDeps",
  },

  modularizacao_por_pasta: `
 1. cada pasta um indexador arquivoFora chamado deps||subDeps que puxa os modulos das subPastas
 1. dentro do deps||subDeps export * que vem do subModulo da pasta alvo.
 1. no deps ou subDeps ao importar tem que haver no maximo <./pasta> ONDE ESTOU /1_UMA_PASTA_ALVO
 1. no deps ou subDeps A IMPORTACAO É DE NO MINIMO 1 UMA PASTA 1 ARQUIVO POR EXPORTACAO/IMPORTACAO TOTAL.
 1. detalhe nos subModulos de nivelProfundo dentroDaPasta defina somente arquivosModulos soltos sem pasta.
  `,

  puxar_importacao_correta:
    "prestar atencao se esta puxando o import do arquivo deps costuma ser o primeiro do autoComplete.",

  modificacoes_dependencias_quebradas:
    "mudou local ou nome do arquivo a fonteUnica de solucao é o arquivo <deps> que distribuiu como fonteUnicaDaVerdade.",

  evitar:
    "exportar tudo do module sem renomear variavel, senao ficara objeto dentro de objeto.",
};
