// -- IMPLEMENTANDO FUNÇÃO EXIST() NO ARRAY_ALVO --

type Array1 = {
  ID: string
  c1: string
  c2: string
}
const array: Array1[] = [
  { ID: '1', c1: 'foo', c2: 'bar' },
  { ID: '2', c1: 'foo2', c2: 'bar2' },
]

/**
 * @returns -- SÓ RETORNA SE O OBJ COM ID PASSADO -> EXIST OU NAO NO ARRAY --
 */

export const exist = async (args: Array1) => {
  return await array.some((i) => i.ID === args.ID)
}
// -- SÓ RETORNA SE O OBJ COM ID PASSADO -> EXIST OU NAO NO ARRAY --

const recuperaUseExist = async (args: Array1) => {
  if (await exist(args)) {
    return 'OPS'
  }
  const transform = { ...args, c1: 'MODIFICADO' }
  return await transform
}
// -- CHECA O RESULTADO DE EXIST(): E DA A RESPOSTA -- E CONSTROI O QUE VAI FAZER CASO CONTRARIO --

// -- USO_CLIENT --
// const requestFAIL = { ID: '1', c1: 'foo', c2: 'bar' }
const requestOK = { ID: '10', c1: 'foo', c2: 'bar' }

// console.log(await exist(requestFAIL))
console.log(await recuperaUseExist(requestOK))

export default 1