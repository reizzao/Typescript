// deno-lint-ignore-file no-inferrable-types

/*
* 1. QUERO NO USO DO OBJ_VALUE ESCOLHER OS VALORES
    1. - DE MIN E MAX
    1. - AS FUNCS QUE VAI COMPOR O PIPE

*/

// -- tecnica pipeEncadeado - async --

const min = async (d: number): Promise<number> => await d + 1

const max = async (d: number): Promise<number> => await d + 1

const inputRequest1: number = 10

const ent_primeiroNome = min(await max(inputRequest1))

ent_primeiroNome.then(d => console.log(d)) // response: 12

// -- Fim --