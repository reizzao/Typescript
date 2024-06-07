// deno-lint-ignore-file no-unused-vars

const tipos_dados = [
  {
    titulo: "Precisa de um dado então é necessario um tipo.",
    categorias: ["tipos",],
    conceito: "Pense preciso de um dado, então preciso de um tipo... ou eu uso os já existentes ou eu crio.",
  },
  {
    titulo: "tipos existentes em js",
    categorias: ["tipos",],
    conceito: "tipos existentes em js: [tipos_de_Classe, ]",
  },
  {
    titulo: "tipos_de_Classe",
    categorias: ["tipos", "tipos_de_Classe"],
    conceito: "tipos_de_Classe: [ String, Number, Object, Error, Boolean.  ],por serem tipos de classes todos eles podem ser instanciados e criar varios novos objetos filhos que herdam membrosdo seu proprio tipo. Obs: os tipos String, Number, Boolean, podem ser instanciados sem o new de gorma literal inserindo o valor direto.",
  },
  {
    titulo: "Criando tipos",
    categorias: ["tipos", "tipos_de_Classe"],
    conceito: `O tipo que for clonado, personalizado apartir de um tipo tem wue ser instanciado com new. exemplo quero criar um novo tipo baseado em TalTipo :: crio a classe pra configurar o movo objeto, extendo a classe Original para herdar os membros props que quero que meu tipo tenha e instancio com new.

    resumo: quero um tipo unico petsonalizado configuro vom classe sem extender.
    Quero um tipo baseado apartir de um tipo ja existente extendo esta classe de tipo  alvo existente.

    Para clonar extender um tipo ja existente >> invoco no bloco do construtor a função super( recebendo o que o tipoAlvo recebe na sua construção )`,
  },


]

