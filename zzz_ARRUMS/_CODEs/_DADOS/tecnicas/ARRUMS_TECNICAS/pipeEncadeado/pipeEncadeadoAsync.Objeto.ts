// deno-lint-ignore-file no-inferrable-types

/*
* 1. QUERO NO USO DO OBJ_VALUE ESCOLHER OS VALORES
    1. - DE MIN E MAX
    1. - AS FUNCS QUE VAI COMPOR O PIPE

*/

// interface Arg {
//     primeiroNome: string
//     idade: number
// }

type MinMaxType = number | string | unknown
// -- tecnica pipeEncadeado - async --

const setMinTextLocal = 2
const setMinNumberLocal = 1

const setMaxTextLocal = 2
const setMaxNumberLocal = 2 // futuro: nao tera por enquanto maxNumber

const min = async (d: MinMaxType, minText = setMinTextLocal, minNumber = setMinNumberLocal): Promise<MinMaxType> => {
    if (typeof d === 'string' && d.length < minText) {
        throw `Ops... as letras não podem ser menor que ${minText}`
    }
    if (typeof d === 'number' && d < minNumber) {
        throw `Ops... o numero não pode ser menor que ${minNumber}`
    }
    return await d
}

const max = async (d: MinMaxType, maxText = setMaxTextLocal,): Promise<MinMaxType> => {
    if (typeof d === 'string' && d.length > maxText) {
        throw `Ops... as letras não podem ser maior que ${maxText}`
    }
    // futuro: nao tera por enquanto maxNumber
    return await d
}

// DIVERSOS TIPOS DE REQUEST STRING E NUMBER PARA TESTER
// const inputRequest1: MinMaxType = 10
// const inputRequest1: MinMaxType = 'r'
const inputRequest1: MinMaxType = 'Abcdefghto11'

const ent_primeiroNome = min(await max(inputRequest1))

ent_primeiroNome.then(d => console.log(d)) // response: 12



export default 1
// -- Fim --