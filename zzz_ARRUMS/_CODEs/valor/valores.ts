// deno-lint-ignore-file no-unused-vars

// operador de coalescencia - caso o operando nao tenha valor_valido é assumido o valor passado apos os ??
const idade = 0;
// console.log(`Sua idade é ${idade ?? "nao informado"}`);

/*
valores:
possiveis: [ marretadoMagicoLiteral, dinamicoParamFuncao, dinamicoParamObjeto ],
conceito: "se de inicio esta passando um marretadoMagicoLiteral, é porque nao sabe o valor que pode vir , e pode torna-lo alternativo dinamico, ao troca-lo por um dinamicoParamFuncao",
*/
const recebeNome = (aNome: string) => aNome;
const digaSeuNome = (fNome: string) => () => `Ola ${fNome}`;
const useFNome = digaSeuNome(recebeNome("gustavo"));
console.log( useFNome() );
