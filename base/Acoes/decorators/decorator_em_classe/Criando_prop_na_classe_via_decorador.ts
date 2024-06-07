
/**
 * @desc Criando prop <version> na classe via decorador
 * @logica recebi o construtor do alvo, devolvo a heranca deste alvo adicionando uma variavel campo com o valor recebido da decoracaoPai
 */


function SetApiVersion(apiVersion: string, foo: string) {

  return (constructor: any) => {

    return class extends constructor {
      version = apiVersion
      fooProp = foo
    }

  }

}

@SetApiVersion("1.0.0", "valor para fooProp")
class Foo { }

// ao instanciar a classe vejo a propriedade nela criada via decorador com o que ele recebeu.
console.log(new Foo())
