// interface MeuTipo extends Proto {
//   c1: string
//   c2: string
// }

// interface Proto {
//   metodo?: () => string
// }

// function fabricaObjeto(o: MeuTipo) {
//   const newObj = o
//   const metodo: Proto = function () {
//     return `Oi`
//   }
//   const merge = { ...o, ...metodo }
//   return merge
// }

// const obj1: MeuTipo = {
//   c1: "11",
//   c2: "22"
// }

// console.log(obj1.metodo())