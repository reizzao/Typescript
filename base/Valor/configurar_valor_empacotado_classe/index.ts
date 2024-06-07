interface Props {
  c1: string
  c2: string
}

class Classe1 {
  constructor(
    public readonly props: Props
  ) { }

  static createInstanceProps(props: Props) {
    return new Classe1(props)
  }

  computado1() {
    return `Foi Concatenado >> ${this.props.c1}  && ${this.props.c2}`
  }
}

const request1: Props = { c1: "1", c2: "2" }

const i1 = Classe1.createInstanceProps(request1)
// console.log(i1)
console.log(i1.computado1())


export default 1