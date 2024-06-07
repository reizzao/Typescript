// deno-lint-ignore-file no-unused-vars no-inferrable-types

// feedbacks
const feedSpecialCharactersInvalid = "Ops... não pode iniciar com caracteres invalidos!"
const feedLettersMinValid = `Ops... o total de letras não pode ser menor que `
const feedLettersMaxValid = `Ops... o total de letras não pode ser maior que `

// auxiliares
/**
 * @description hasStartSpecialCharacters() == tem inicio com caracteres especiais () ?
 * @param param0  (s: string)
 * @returns boolean
 * @details checa se começa com letras validas, e se nao pode começar com espaços ou caracteres especiais.
 */

function hasStartSpecialCharacters(s: string): boolean {
    const regex = /^[A-Za-z][\s+\w]+[A-Za-z]+$/;
    return regex.test(s);
}

/**
 * @description isString() == é string valida ()
 * @param param0  (s: string)
 * @returns string || void
 * @details checa se o argumento existe e se nao é indefinido, checa atraves de metodo importado se começa com caracteresEspeciais().
 */

const isString = (s: string): string => {
    if (
        typeof s === 'undefined'
        || !hasStartSpecialCharacters(s)
        // || typeof s !== "string" || // obs: não precisa checar se é uma string
    ) {
        throw new Error(feedSpecialCharactersInvalid)
    }
    return s
}

// SETS
const setMinTextLocal = 3
const setMinNumberLocal = 1
const setMaxTextLocal = 200
// para testar coloque o maximo : 10
// TODO : Conferir quando convem maximizar o uso de quantidade de strings.


// FEATURES : MIN & MAX
const minString = async (d: string, minText = setMinTextLocal): Promise<string> => {
    if (d.length < minText) {
        throw new Error(`${feedLettersMinValid}${minText}`)
    }
    isString(d)
    return await d
}

const maxString = async (d: string, maxText = setMaxTextLocal,): Promise<string> => {
    if (typeof d === 'string' && d.length > maxText) {
        throw new Error(`${feedLettersMaxValid}${maxText}`)
    }
    return await d
}

// FAKES: DIVERSOS TIPOS DE REQUEST STRING E NUMBER PARA TESTER
const fakeFAILStringMax: string = 'abcdefghto11'
const fakeFAILStringMin: string = 'aa'
const fakeFAILStartSpecialCharactersInvalid: string = '#abcd'

const fakeOKStringMax: string = 'Reinaldo'
const fakeOKStringMin: string = 'abc'

// -- CONSOLE TESTERS --
function exeString() {
    try {
        return isString("") //retorna ->  undefined -> mostrar feedback de erro
        // return isString(" ") // -> mostrar feedback de erro
        // return isString("eee") // -> acerto então -> mostrar o artefator
        // return isString(10) // não usar -> este number nao vou testar - preparei só pra receber string
    }
    catch (err) {
        return err.message
    }
}
// console.log(exeString())

async function showResult() {
    try {
        console.log(await minString(await maxString(fakeFAILStringMax)))
        // -> [FAIL] As letras não podem ser MAIOR >> QUE O SETADO

        // console.log(await minString(await maxString(fakeFAILStringMin)))
        // -> [FAIL] As letras não podem ser MENOR >> QUE O SETADO

        // console.log(await minString(await maxString(fakeFAILStartSpecialCharactersInvalid)))
        // -> [FAIL] "Ops... não pode iniciar com caracteres invalidos!"

        // TESTERS DE RESULTADOS OK
        // console.log(await minString(await maxString(fakeOKStringMax)))
        // console.log(await minString(await maxString(fakeOKStringMin)))
    }
    catch (err) {
        console.log(err.message)
    }
}
showResult()




export default 1