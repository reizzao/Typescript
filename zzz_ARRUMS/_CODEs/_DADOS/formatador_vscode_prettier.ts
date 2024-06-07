/*

tutoriais: ['https://www.getfishtank.com/blog/running-prettier-from-the-command-line', ]

importante: para a formatacaoa contecer mais rapida insira um arquivo .prettierrc em cada projeto deno ts

extensao: nao esquecer de ver se a extensao prettier esta corretamente instalada.

prettier: pageExtensaoVscode: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

github_prettier_vscode: https://github.com/prettier/prettier-vscode

no_vscode_settings: puxar o arquivo de config prettierrc >> "prettier.configPath": ".prettierrc.json",

habilitar_no_vscode_json_o_prettier: { "editor.defaultFormatter" : "esbenp.prettier-vscode" , "editor.formatOnSave" : true }

vscode_habilitar_desabilitar_formatacao_deno: 'aem  "editor.defaultFormatter": TROCAR "denoland.vscode-deno" por "esbenp.prettier-vscode",'

formatador_uso_no_vscode: 'ctrl+shif+p escolha formatDocument', tutorial: https://www.alphr.com/use-prettier-vs-code/

config_no_prettierrc_json: `
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120
}

para formatacao global melhor no settings json colocar as config do prettier dentro do escopo da linguagem o edior obedece mais rapido a config. senao ele procura o default dalinguagem como por exemplo o que nao é desejado >>

significados_props_de_configuracao:
virgula_a_direita_ultima_prop_de_objetos: "trailingComma": "none",
espacos_recuo_tab:  "tabWidth": 2,
ponto_e_virgula_sentencas:  "semi": false,
aspas_duplas_em_textos:  "singleQuote": true,
tamanho_habil_escrita_na_tela:  "printWidth": 130

verificar_no_json:
  propriedades de config typescript :: "typescript.preferences.quoteStyle": "single", // removi este.

`
*/