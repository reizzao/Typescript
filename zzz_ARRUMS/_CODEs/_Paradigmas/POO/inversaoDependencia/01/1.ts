
type FooClassArgs = { ID: string, num1: number, num2: number, resultComput?: number }

class FooClass {
  public args!: FooClassArgs

  constructor(args?: FooClassArgs) {
    this.args = args!
    this.args.resultComput = this.comput1()
  }

  perform(args: FooClassArgs) {
    const newInstance = new FooClass(args)!
    const res = newInstance
    return res
  }

  static create(args: FooClassArgs) {
    return new FooClass(args)
  }

  // newInstance(args: FooClassArgs) {
  //   args?.resultComput! = this?.comput1?.()!
  //   return new FooClass(args)
  // }

  comput1() {
    return this.args.num1 + this.args.num2
  }
}

export {
  FooClass,
  type FooClassArgs
}