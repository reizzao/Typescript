// deno-lint-ignore-file no-unused-vars no-explicit-any

// feedbacks
const feedNumberMinValid = `Ops... o numero não pode ser menor que `

// SETS
const setMinNumberLocal = 1

const minNumber = async (d: number, minNumber = setMinNumberLocal): Promise<number> => {
    if (d < minNumber) {
        throw new Error(`${feedNumberMinValid}${minNumber}`)
    }
    return await d
}

// -- CONSOLE TESTER

async function exeMinNumber(n: number) {
    try {
        return await minNumber(n)
    }
    catch (err: any) {
        return err.message
    }
}

exeMinNumber(0).then(d => console.log(d))
exeMinNumber(-1).then(d => console.log(d))
exeMinNumber(1).then(d => console.log(d))

export default 1