// deno-lint-ignore-file no-unused-vars

// import makeloc from "https://x.nest.land/dirname@v1.1.2/mod.ts";

// const { __dirname, __filename } = makeloc(import.meta);

// function lerDir() {
//   Deno.readDirSync(`${__dirname}/../*/subdir/*.js`).map((__filename: any) => {
//     console.log(__filename);
//   });
// }

/*
deno nao tem o dirname que é o diretorio onde estou ..mas da pra usar a lib: https://deno.land/x/dirname@1.1.2/README.md?source=
*/

/* *************************************************** */

try {
  for await (const dirEntry of Deno.readDir("dir1")) {
    console.log(dirEntry);
  }
} catch (err) {
  console.error(err);
}
