[
  {
    titulo: "utilizar classe com metodos estaticos",
    categorias: ["classe", "metodos_estaticos"],
    contexto: "use chammando diretamente a classe e seus metodos sem instanciar",
    conceito: "se vai usar só os metodos eles tem que ser staticos e nao precisa criar construtor, nem instanciar a classe... use a classe diretamente chamando os metodos estaticos.",
    observacoes: "#null",
    exemplos: `
    class SuperTests {
      // constructor() { }

      /**
         * @description  catchMessageThrowNewError : captura e compara mensagem exata do lançamento de novo erro.
         * @input  methodTargetAsync  returns .toEqual(messageError)
         * @exemple expect(await getAsyncMessageNewErrorThrowTest ( methodtargetAsync )).toEqual('msg_1')
         */

      static async catchMessageThrowNewError(methodTarget: any) {
        try {
          return await methodTarget()
        }
        catch (err: any) {
          return err.message
        }
      }

    }

    export { SuperTests }
    `,
  },

  {
    titulo: "uso de classe utilitaria que usa o this, usando tecnica factoryMethod onde a propria classe se instancia.",
    categorias: ["configurador_de_objeto", "classe_utilitaria", "uso_this"],
    contexto: "o macete é pré instanciar a classe, e depois com a instancia fazer o objetivo ou usar o objeto ou usar o emtodo do objeto.",
    conceito: `
    -- o construtor pode estar vazio, porque vamos usar somente seus metodos fora.
    -- podemos usar o this para acessar as props da classe, nao precisa criar props staticas e acessar com a classe.
    -- préUso : instanciamos a classe para poder usar seu objeto pára criar um maker.
    -- guardamos em uma variavel a execucao da préInstancia criando assim um maker.
    -- usamos o maker fora da classe -- tendo acesso as seus membros prototypes.

    `,
    observacoes: "#null",
    exemplos: `
    class Entity {
      private campo1!: number
      private campo2!: number

      constructor() {
        this.campo1 = 10
        this.campo2 = 20
      }

      async perform() {
        return await \`>>>>>>>>>> Hello Word >> Comput Soma C1+C2 === \${this.campo1 + this.campo2}\`
      }
    }

    // o macete é pré instanciar a classe criando um <preMaker>, e depois com a instanciaPremaker fazer o <maker> (objetivo para ser usado fora do arquivo) ou usar o objeto ou usar o metodo do objeto.

    const intanceEntity = async () => await new Entity()

    const makerEntity = await intanceEntity()

    console.log(await makerEntity)
    console.log(await makerEntity.perform())

    export default 1

    `,
  },
  {
    titulo: "tecnica factoryMethod para criar classe utlitaria podendo usar o this dentro dela e fornecendo um objeto maker para uso fora.",
    categorias: ["configurador_de_objeto", "classe_utilitaria", "uso_this", "factoryMethod", "instanciarPropriaClasse"],
    contexto: "factoryMethod criar metodo static preMaker instanciando a classe , utilidade somente se for mudar algo na criacao da instancia. obs: se for para maker nao precisa.",
    conceito: `
    -- o construtor pode estar vazio, porque vamos usar somente seus metodos fora.
    -- podemos usar o this para acessar as props da classe, nao precisa criar props staticas e acessar com a classe.

    -- macete : factoryMethod criar metodo static preMaker instanciando a classe , e fora criar o maker chamando a classe executando o statico preMaker()
    -- ou seja o preMaker é criado no metodo statico dentro da classe e ele é usado fora para gerar o maker.

    `,
    observacoes: "#null",
    exemplos: `
    class Entity {
      private campo1!: number
      private campo2!: number

      constructor() {
        this.campo1 = 10
        this.campo2 = 20
      }

      static _preMaker() {
        return new Entity()
      }

      async perform() {
        return await \`>>>>>>>>>> Hello Word >> Comput Soma C1+C2 === \${this.campo1 + this.campo2}\`
      }
    }

    const makerEntity = await Entity._preMaker()

    console.log(await makerEntity)
    console.log(await makerEntity.perform())

    export default 1

    `,
  },

]

