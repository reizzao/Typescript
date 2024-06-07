[
  {
    titulo: "",
    categoria: ["", ""],
    linguagem: "",
    macete: "",
    estrategia: "",
    passos_logicos: ``,
    exemplo: ``,
  },
  {
    titulo: "criando entidade com primitivos via metodo statico da classe",
    categoria: ["POO", "criacional", "statico"],
    linguagem: "typescript",
    macete: "os campos tem que ser assinalados no construtor e no metodo igualmente, e aos instancias nao precisa passar o do construtor só no metodo.",
    estrategia: "",
    passos_logicos: `
    # criando entidade com primitivos via metodo statico da classe:

* definir_campos_pertencentes_ao_objeto: no construtor, nao precisa inicializar seus valor.

* configuracao_campos_do_objeto: {
  imutavel_apos_primeira_atribuicao: use o modificador <readonly> <somenteLeitura>,

  deixar_prop_inacessivel_fora_do_objetoClasse: use o a visibilidade <private>

  deixar_prop_acessivel_fora_do_objetoClasse: use o a visibilidade <public>

* conceito_estatico: para usar fora somente chamando pela classe.

* criando_metodo_apartir_de_campos_pertencentes_ao_objeto: crie o metodo static, com parametros iguais aos campos pertencentes do objeto, e retorne uma nova instancia da classeObjeto com os aprametros recebidos.

* metodos_para_todas_instancias: crie como public ou coloque nenhuma marcacao no metodo que sera publico e todas instancias tera este metodo podendo acessar qualquer campo que o objeto tenha
`,
    exemplo: `
    class Entidade {
      constructor(
        public readonly campo1: string,
        public readonly campo2: string,
      ) {}

      static createEntidade(campo1: string, campo2: string) {
        return new Entidade(campo1, campo2);
      }

      public nomeCompleto() {
        return this.campo1 +" "+ this.campo2;
      }
    }

    const makeEntidade = Entidade;
    const instancia1 = makeEntidade.createEntidade("reinaldo", "zacharias");

    // CONSOLES
    console.log("NOME COMPLETO >>>>>  ", instancia1.nomeCompleto());
    console.log(instancia1);
    export default 1;
    `,
  },
  {
    titulo: "criando entidade com OBJETO via metodo statico da classe",
    categoria: ["POO", "criacional", "statico"],
    linguagem: "typescript",
    macete: "os campos temq ue ser assinalados no construtor e no metodo igualmente, e aos instancias nao precisa apssar o do construtor só no metodo.",
    estrategia: "",
    passos_logicos: `
    # criando entidade com objeto via metodo statico da classe:

* definir_campos_pertencentes_ao_objeto: no construtor, nao precisa inicializar seus valor.

* configuracao_campos_do_objeto: {
  imutavel_apos_primeira_atribuicao: use o modificador <readonly> <somenteLeitura>,

  deixar_prop_inacessivel_fora_do_objetoClasse: use o a visibilidade <private>

  deixar_prop_acessivel_fora_do_objetoClasse: use o a visibilidade <public>

* conceito_estatico: para usar fora somente chamando pela classe.

* criando_metodo_apartir_de_campos_pertencentes_ao_objeto: crie o metodo static, com parametros iguais aos campos pertencentes do objeto, e retorne uma nova instancia da classeObjeto com os aprametros recebidos.

* metodos_para_todas_instancias: crie como public ou coloque nenhuma marcacao no metodo que sera publico e todas instancias tera este metodo podendo acessar qualquer campo que o objeto tenha
`,
    exemplo: `
    type ArgsObjeto = { campo1: string, campo2: string }

class Entidade {
  constructor(
    public readonly args: ArgsObjeto,
  ) {}

  static createEntidade({ campo1, campo2 }: ArgsObjeto) {
    const newObjeto = { campo1, campo2 }
    return new Entidade(newObjeto);
  }

  public nomeCompleto() {
    return \`$\{this.args.campo1} $\{this.args.campo2}\`;
  }
}

const makeEntidade = Entidade;
const instancia1 = makeEntidade.createEntidade({campo1: "reinaldo", campo2: "zacharias"});

// CONSOLES
console.log("NOME COMPLETO >>>>>  ", instancia1.nomeCompleto());
console.log(instancia1);
export default 1;
`,
  },
];
