const __filename = new URL("", import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL(".", import.meta.url).pathname;

const caminhoArquivos = `${__dirname}/dir1`;
const caminhoArquivos2 = `${__dirname}/dir1`;

// Funcao

async function getNames(currentPath: string) {
  const names: string[] = [];

  for await (const dirEntry of Deno.readDir(currentPath)) {
    const entryPath = `${currentPath}/${dirEntry.name}`;
    names.push(entryPath);

    if (dirEntry.isDirectory) {
      names.push(await getNames(entryPath));
    }
  }

  return names;
}

console.log(await getNames(caminhoArquivos2));

// /home/rzj/..pgm/Deno/manipular_arquivos/02/dir1
