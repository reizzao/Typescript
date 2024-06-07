[
  {
    titulo: "importar e exportar ao mesmo tempo",
    linguagem: "typescript",
    categoria: ["importacao_exportacao", "dependencias"],
    conceito:
      'com export { modulo } from "caminho/" ele ja faz a importacao e exportacao',
    exemplo: 'export { modulo } from "caminho/"',
  },
  {
    titulo: "importar e ja exportar as replicas de modulos",
    linguagem: "typescript",
    categoria: ["importacao_exportacao", "dependencias", "modulos"],
    conceito: `
    import_export_replicar_modulos: "ao inves de importar e depois criar nova var para uso das replicas, faz assim : exporta o endereco do modulo que traz tudo, , { extrai os artefatosAlvo as mkeNovaVariavel_ParaReplicaDeUso }"

info: "as variaveis de replica após a keyword <as> são variaveis novas e elas que sera usadas pela app."

convencao_nomear: nomear inicio como <mke : significa makeExternal>
`,
    exemplo: `
    // objectValuesFN ============================================================
export { objectValuesFN as mkeObjectValuesFN } from "https://raw.githubusercontent.com/rzjprogramador/lib_rzj_typescript/v1.0.0_objectsValueFN/main.ts";
`,
  },
  {
    titulo: "importar em escopo ts",
    linguagem: "typescript",
    categoria: ["importacao_exportacao", "dependencias"],
    conceito:
      "dentro do escopo>> constante e funcoes só precisa do nome, <tipo> precisa da keyword <type>, <mudavel na importacao> a <default> coloca <default as nomeDoArtefato>",
    exemplo:
      "export { type HttpResponse, type InfoController, ok, minhaConstante,  default as modFoo}",
  },
];
