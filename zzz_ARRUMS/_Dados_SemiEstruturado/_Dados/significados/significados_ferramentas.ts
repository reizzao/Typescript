[
  {
    titulo: "",
    traducao: "",
    contexto: "",
    casosDeUso: "",
  },
  {
    titulo: "significados props formatador de codigo deno fmt",
    traducao:
      "para cada plataforma faça um escopo da linguagem para refletir na plataforma.",
    contexto: "",
    casosDeUso: `
      \{
    usar tab >> "useTabs": true,
    largura da tela"lineWidth": 120,
    identacao >>  "indentWidth": 4,
    ponto e virgula  >> "semiColons": false,
    aspas simples >> "singleQuote": true,
    preservar pulo de linha >> "proseWrap": "preserve",
    incluir_diretorio >> "include": ["src/"],
    excluir_diretorio >> "exclude": ["src/testdata/", "data/fixtures/**/*.ts"]
  \}
    `,
  },
  {
    titulo: "significados props formatador de codigo prettier",
    traducao: "",
    contexto:
      "para cada plataforma faça um escopo da linguagem para refletir na plataforma. obs: só instale a extensao prettier se for usa-lo caso contrario mantenha desinstalada.",
    casosDeUso: `
    significados_props_de_configuracao:
    virgula_a_direita_ultima_prop_de_objetos: "trailingComma": "none",
    espacos_recuo_tab:  "tabWidth": 2,
    ponto_e_virgula_sentencas:  "semi": false,
    aspas_duplas_em_textos:  "singleQuote": true,
    tamanho_habil_escrita_na_tela:  "printWidth": 130
`,
  },
  {
    titulo: "orderFunction",
    traducao: "funcao de primeira ordem",
    contexto:
      "é uma funcao anonima  com o paramFuncao e na consequencia invocamos esta funcao",
    casosDeUso:
      "OF : Orderfunction, :: apartir do es6 do js usamos em funcoes de array - map(OF), filter(OF), reduce(OF), promise - new Promise( OF ) ,",
  },
];
