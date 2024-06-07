type Mescla = Um | Dois

type Um = {
  c1: string
  c2: string
}
type Dois = {
  key1: string
  key2: string
}

type typeArgsFN<T> = (args: T) => T

const fn1: typeArgsFN<Um> = (args) => {
  const res = {
    c1: args.c1,
    c2: args.c2
  }
  return res
}

const request = { c1: 'foo', c2: 'bar' }
console.log(fn1(request))

export default 1