// deno-lint-ignore-file no-unused-vars

const configuracoes = {
  categoria: "vscode_com_vim",
  titulo: "configs para funcionar vscode com vim",
  contexto: "no vscode settings.json",
  conceito: `
  1. - adicionar mais um atalho ao <Esc> -> configuraremos o <j 2vezes> para ser + uma opção a mudar de modo. adicionando a config:
  // VIM_VSCODE
  "vim.insertModeKeyBindings": [
    {
      "before": [ "j", "j"],
      "after": ["<Esc>"]
      // atalho < j 2vz > para mudar modos - obs: mesmo assim funciona o Esc
    }
  ],

  ----------------- // ------------------------

  2. - o vim no scode só funciona o Tab no mdo leitura é exatamente o que é os modos fora do edição do vim entao ensinamos o vscode a usar o Tab em qualquer modo. adicionando no <keybindings.json> do vscode.
  {
    "key": "tab",
    "command": "tab",
    "when": "editorTextFocus && !editorTabMovesFocus"
  },
  {
      "key": "shift+tab",
      "command": "outdent",
      "when": "editorTextFocus && !editorTabMovesFocus"
  },

  `,
};
