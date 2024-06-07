const convencaoNomes = [
  {
    titulo: "nomear ação verificadora",
    categorias: ["", ""],
    conceito: "<has> seguido do que ela vai verificar na sequencia",
    exemplo: [
      "ex: hasSpace, hasLengthTextMinForFirstName temTamanhoDeTextoMinimoParaPrimeiroNome",
    ],
  },
  {
    titulo: "nomear artefato principal lib ou que vai ser replicado",
    categorias: ["nomeação", "nome_minha_Lib", "nome_ArtefatoPrincipalReplica"],
    conceito:
      "definir em <camelCase> --> e na replica replicar como <PascalCase>",
    exemplo: [
      "{ minhaLib as MinhaLib }",
    ],
  },
  {
    titulo: "nomear minha Lib e Arterfato Principal",
    categorias: ["nomeação", "nome_minha_Lib", "nome_ArtefatoPrincipalReplica"],
    conceito:
      "definir com a sintaxe -> <Recurso + ALIAS_LINGUAGEM__TUDO_MAIÚSCULO> ex: SuperDateTS ",
    exemplo: [
      "SuperDateTS",
    ],
  },
];
