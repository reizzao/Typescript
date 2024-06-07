// deno-lint-ignore-file no-unused-vars

const plataformaDeno = {
  comandos: {
    update: "`sudo deno upgrade`",
    rodar_arquivo_com_caminhoMapeado:
      "deno run --watch -A --import-map import_map.json <arquivo.ext>",
    rodar_todos_tests_com_caminhoMapeado:
      "deno test -A --watch --import-map import_map.json",
  },
};
