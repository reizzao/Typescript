// deno-lint-ignore-file no-unused-vars

const objConceitoImportMaps = {
  conceito_comando_rodar:
    "ao inves de argumentar o arquivo , argumento o <parametro /flag>j<com valor default> que é o arquivo de onde ele buscara os imports que é o import_map.json ",

  rodar: {
    rodar_test: "deno test --import-map import_map.json",
    rodar_test_autoreload: "deno test --watch --import-map import_map.json",
    rodar_test_sintaxe:
      "deno test --watch --import-map <ARQUIVO_ONDE_ESTAO_IMPORTACOES>.json",
  },

  rodar_com_multiples_imports: {
    rodar_arquivo:
      "`deno run -A --watch --import-map=import_map.json src/main.ts`",

    rodar_test: "`deno test -A --watch --import-map=import_map.json`",
  },

  definindo_import_maps_json: {
    no_vscode_settings_do_projeto: `
    // configure apra enxergar o deno.json e o import_map.json
    {
      "deno.config": "./deno.json",
      "deno.importMap": "./import_map.json"
    }
    `,
  },

  definindo_caminhos_mapeados: {
    variaveis: {
      de_diretorio:
        "se o valorEndereco for até um <DIRETÓRIO/> a variavel tem que ter barra no final é #obrigatorio, #eviteErrar",

      de_arquivo:
        "se o valorEndereco for até um <ARQUIVO.EXT> a variavel NÃO PODE TER BARRA NO SEU FINAL é #obrigatorio, #eviteErrar",

      de_escopo:
        `ela acessara os arquivos e diretorios dentro do escopo definido, este escopo tem como chave a variavelDiretorio que vc definir. #preferencia: bom somente para modulo que vai acessar varios modulos dentro de si mesmo, mas nao muito ideal para cruzamneto de uso de modulos. #antiManutencao semelhanteImportacaoNormal EsModules`,
    },

    conceito_evite_errar:
      "#eviteErrar se definiu a variavel ex: @/ é arrobaBARRA entao no uso use @/ depois o que definiu no valor endereco....e assim por diante",

    no_import_map_json: `
      defina uma variavel ex: "@/" e de um endereco até pasta/ com final barra para uso - ai no uso vao chamar a variavel e terao acesso ao que ela tem na pasta no_bloco_scopes:
      chame uma das variaveis que vc ja definiu no imports e configure extensoes de escopos para ela - o nome da chave nao estara para uso NÃO SERÁ RELEVANTE, mas o VALOR  de endereço de passar pra ela <no uso> te dará acessos.
    `,

    tutoriais: [
      "https://youtu.be/BSQYpkA-Tn8",
      "chatGpt mergeImport_Maps: https://chat.openai.com/c/d4abd6e1-6255-4dd9-98b4-2868c5935fa6",
    ],

    exemplo: `
    // exemplo arquivo :: import_map.json

    {
      "imports": {
      "@/": "./src/",
      "@/entidades": "./src/entidades/"
      },
      "scopes": {
        "@/": {
          "pasta2": "./src/pasta2/",
          "pasta3": "./src/pasta3/"
        },
        "@/entidades": {
          "entidade1": "./src/entidades/ent_1/",
          "entidade2": "./src/entidades/ent_2/",
          "entidade3": "./src/entidades/ent_3/"
        }
      }
    }
`,
  },
};
