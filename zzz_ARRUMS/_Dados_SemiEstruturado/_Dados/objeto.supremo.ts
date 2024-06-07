type Obj = { c1: string, c2: string, foo: Foo }
type Foo = { bar: string }

const obj: Obj = {
  c1: 'um', c2: 'dois', foo: { bar: 'bar' },
}
// { bar: 'bar' }

const editObj = (arg: string) => {
  const nObj: Obj = { ...obj }
  nObj.foo.bar = arg
  // #update objeto: tatica sobreescrever prop de sub objeto - primeiro copia o obj, depois acessa a subPropriedade e passa o novo valor para ela.
  return nObj
}
console.log(obj)
console.log(editObj('novoValor'))
