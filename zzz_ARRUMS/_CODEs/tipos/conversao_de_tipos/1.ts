
type Um = {
  c1: string | null
  c2: string | null
}

type typeArgsFN = (args: Um) => Um

const fn1: typeArgsFN = (args) => {
  const res = {
    c1: args.c1,
    c2: args.c2
  }
  return res
}

const request = { c1: 'foo', c2: 'bar' }
console.log(fn1(request))

export default 1