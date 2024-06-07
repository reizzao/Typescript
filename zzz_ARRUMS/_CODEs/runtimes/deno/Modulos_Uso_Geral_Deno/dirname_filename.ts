const __filename = new URL("", import.meta.url).pathname;
// Irá conter barra à direita
const __dirname = new URL(".", import.meta.url).pathname;

export { __dirname, __filename };

/*
Em Deno, não há variáveis ​​como __dirnameou __filename, mas você pode obter os mesmos valores graças aimport.meta.url
*/
