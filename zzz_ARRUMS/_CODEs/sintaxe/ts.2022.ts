class Entity {
  method1 = () => `Hello Word!`
  method2 = () => `Reizao Programador`
  method3 = () => {
    const dez = 10
    const vinte = 20
    return dez + vinte
  }
}

const entity = new Entity()
console.log(entity.method1())
console.log(entity.method2())
console.log(entity.method3())


export default 1