// deno-lint-ignore-file no-unused-vars

// Acessos internos dentro do proprio objeto

interface ObjectType {
  key1: number
  method1: () => string
}

const object1: ObjectType = {
  key1: 2,
  method1(this: ObjectType) {
    return `Ops...message acess key >>  ${this.key1}`
  }
}

export default 1