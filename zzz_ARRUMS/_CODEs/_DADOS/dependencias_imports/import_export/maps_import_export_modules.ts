[
  {
    titulo: "import maps no deno",
    tecnologia: "deno",
    conceito:
      `para funcionar configure no .vscode/settings na chave "deno.importMap": "./import_map.json" onde esta o import_map.json com as importacoes, ..por via das duvidas no deno.json add a chave que tambem aponta pro json de importacoes, e crie qualquer arquivo main.ts e rode o comando para puxar os modulos: deno run --import-map=import_map.json  --allow-net main.ts `,
    tutoriais: [
      "https://github.com/fannheyward/coc-deno/issues/118",
      "https://www.youtube.com/watch?v=joxOiyNsFNs",
    ],
  },
];
