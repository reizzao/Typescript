class PipeMetodosRetornaThis {
  constructor(
    public c1: number = 10
  ) { }

  soma(d: number): this {
    this.c1 += d
    return this
  }
  divide(divisao: number): this {
    this.c1 /= divisao
    return this
  }
}

const i1 = new PipeMetodosRetornaThis()
console.log(i1.soma(10).divide(2))

/*
CONCEITOS

prop_com_valor_padrao_em_classe : inicio no constructor esta prop e add seu valor inicial padrao

fazer_operacoes_matematicas_com_prop_que_ja_tem_valor: com props que ja tem um valor inicial e vai modificalo (soma, div, sub) usar +=, -=, /= o igual junto com o sinal da operacao indica que vai adicionar o que ja tem na nova operacao que vai ser executada.

poder_encadear_varios_metodos_sobre_o_resultado_da_mesma_fonte_de_valor: #semelhante a um pipe >> no metodo use os campos proprios do objeto que faça operacao com o que for recebido por param do metro, apos instanciacao pode usar os metodos encadeados que agirá a cada valor retornado dos outros metodos executados ex: instance1.soma(10).divide(2) // vai somar o que ja tem de padrao na prop + 10 e este resultado sera dividido por 2 que foi passado.

*/