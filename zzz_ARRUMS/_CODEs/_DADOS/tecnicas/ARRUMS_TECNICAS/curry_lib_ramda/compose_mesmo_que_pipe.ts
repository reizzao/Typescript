// deno-lint-ignore-file no-inferrable-types

const f1 = (n: number): number => 1 + n // 11
const f2 = (n: number): number => 2 + n // 11 + 2 = 13
const f3 = (n: number): number => 3 + n // 13 + 3 = 16 -- total
const listFN = [f1, f2, f3]

const myComposePipe = async (data: number, arrayFN: Function[]) => {
  return await arrayFN.reduce((acc, fn) => fn(acc), data)
}

const requestClient: number = 10

myComposePipe(requestClient, listFN).then(d => console.log(d))
// tem que resultar 16

// Resumindo compose da lib ramda é o mesmo de fazer um Pipe.