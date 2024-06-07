
/**
 * @desc Decorator BASE para todos tipos de decoradores.
 * @provaveis podemos criar os decorator de : [ class: classe, property: atributos, component: de atributos da classe, selector: ???, usestate("foo"): ??? ]
 * @resumo nos params da funcao Pai o que recebemos sera argumentado no uso do decorator, o que retornarmos sera a acao que vai fazer algo com os params que recebemso do pai
 * @formato o esqueleto da funcaoDecoradora é : function Decoradora(fooArg) { return (fooArgAlvo) => { ..faca algo com os args do alvo } }
 * @input podemos receber no decorador nenhum param só ira executar algo ou os parametros default por JUSTA POSICAO do alvo, os nomes dos params podem ser de livre escolha segue os de convencao -> [ 1º target: retorna o construtor da classe, prefix: retorna o que o uso do decorador recebeu,  ]
 * @use para usa-lo vai no elemento que quer decorar e por o @nomeDaFuncaoDecoradoraCriada,
 * @return uma estrutura function uma funcao anonima que usa os params default para fazer algo
 * @example ...'
 */



function Log(prefix: string) {

  return (target: any) => {
    console.log(`${prefix} --> na classe >> ${target}`)
  }

}

@Log("sou o valor argumentado de prefix")
class Foo { }


