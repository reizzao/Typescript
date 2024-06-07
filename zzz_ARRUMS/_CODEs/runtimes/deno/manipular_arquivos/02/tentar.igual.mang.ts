const __filename = new URL("", import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL(".", import.meta.url).pathname;

const caminhoArquivos = `${__dirname}/dir1`;

// Funcao

async function pesquisar() {
  Deno.readDirSync()
}

console.log(await pesquisar());

// /home/rzj/..pgm/Deno/manipular_arquivos/02/dir1
