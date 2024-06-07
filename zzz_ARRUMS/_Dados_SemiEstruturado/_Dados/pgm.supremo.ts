// deno-lint-ignore-file no-unused-vars

const Pmg_Supremo = [
  {
    titulo: "A base fundamental é o dado valor e seu supremo tipo",
    categorias: ["pgm", "valor", "tipo", "supremo"],
    conceito: "#supremo o dado (criado, que entra) é de um tipo (primitivo, de construtor, ou personalizado) então depois de instanciado [ com new se for de construtor, com valor primitivo se for primitivo, com expressao se quiseremos criar um valor] se usa os membros do seu tipo disponiveis... esses membros podem ser [publicos, estaticos utilitarios] para vidualiza-los desencadeamos com <. ponto>",
  },
  {
    titulo: "Classe configurador de objetos.",
    categorias: ["classe", "configurador de valor", "tipo_objeto"],
    conceito: "dentro da classe configuramos mosso objetoFinal, o que é publico estara disponivel no objeto, o que nao for sera utilitario para as vonfiguracoes dos publicos dentro da classe.",
  },
  {
    titulo: "Orientação a objetos é de suprema importância",
    categorias: ["paradigmas", "paradigma_POO"],
    conceito: "orientação a objetos é #supremo porque  os tipos dos dados que manipulamos vem de construtores que constroem os objetos.",
  },
  {
    titulo: "O this",
    categorias: ["paradigma_POO"],
    conceito: "This é a instância do momento, ao configurar this.campo1 pense na instância que estará usando ex: instância.campo1",
  },
  {
    titulo: "Criar valor com expressões",
    categorias: ["valor",],
    conceito: "Expressão operações com operadores que retorna valor.,, é o valor a direita ::pense e formule COMO CHEGAR NESTE VALOR que preciso?",
  },
  {
    titulo: "Testar promessa no deno",
    categorias: ["tests_deno", "promessa"],
    conceito: "Como testar promessa, espero que ela resolva e seja o que eu passar  ??  ex: _EXECUCAO_PROMESSA  .resolves.toBeInstanceOf(Construtor) , aos 36:20 https://youtu.be/jBOLRzjEERk",
  },
  {
    titulo: "Nomeacoes",
    categorias: ["nomeação", "convenção"],
    conceito: "Nomeação : <CasoDeUso||Acao||<OQueFaz> <Entrada||Saída||Local> ex: CreateAlgoRequest / CresteAlgoResponse tutorial aos 30:24 Rocket mostra como nomear : https://youtu.be/jBOLRzjEERk",
  },
  {
    titulo: "Trate exceções por camadas",
    categorias: ["excessões", "tratamento_de_erros"],
    conceito: "Exceções nao podem caminhar livre entre camadas tem que capturar e relançar a cada camada de uso.",
  },
  {
    titulo: "investigar metodos",
    categorias: ["investigar", ""],
    conceito: "investigar métodos de terceiros ao usar, foi criado com mesmos códigos que já usamos então, >>  clique no método entre no seu core veja como foi criado, o que ele pede de entrada no construtor ou param de criação, clique nestes tipos verás a estrutura que você terá que argumentar ao usá-lo, veja sua saída o tipo a estrutura entre nela te mostrará o que vc tem que devolver.",
  },
  {
    titulo: "Investigar Erros no console",
    categorias: ["investigar", "erros"],
    conceito: "evite perder tempo procurando Stack de erro, vai direto na prop error do console e se baseie na classe do erro e resolva ex: ReferenceError já mostrou que é erro de referência. a Stack é só consequência.",
  },

  {
    titulo: "Programação defensiva",
    categorias: ["pgm",],
    conceito: "Programar defensivamente checando valores em Js sem depender do Typescript.",
  },
  {
    titulo: "O retorno indica o tipo",
    categorias: ["tipos", "retornos"],
    conceito: "Atenção ao que vem depois do return ou arrowFunction => este é o tipo que se assina-le como retorno da Função.",
  },
  {
    titulo: "evite documentar com jsdoc",
    categorias: ["documentação",],
    conceito: "evite jsdoc nomeie bem funções, parâmetros, e types ... para entende-la ao passar o mouse.",
  },
  {
    titulo: "tipagem no loop reduce",
    categorias: ["loop", "loop_js_reduce"],
    conceito: "o que vai ficar mudando o valor tipe como any se precisar se o compilador nao inferir, mesmo q vc saiba seu valor ex: acc do reduce.",
  },
  {
    titulo: "Tecnica Pipe",
    categorias: ["tecnicas", "tecnica_pipe"],
    conceito: "mesmo que vai receber promessas o pipe não precisa ser async.",
  },
  {
    titulo: "Hack forçando retorno de promessa",
    categorias: ["retornos", "promessa", "force"],
    conceito: "se precisa devolver promessa e não há uma... então construa instanciando antes o que tem ...e retorne como promessa forçada da variável construída.",
  },
  {
    titulo: "Utilizar membros das estruturas",
    categorias: ["tipos", "membros", "prototypes"],
    conceito: "usar os prototypes das estruturas [array, objeto, string, number, boolean, types ...] e deles utilizar os seus membros getters que traz dados e setters que configura argumenta escreve dados.",
  },
  {
    titulo: "Replicar objeto erro",
    categorias: ["tratamento_de_erros",],
    conceito: "importante em validações, na lib o que tiver recebendo replique/relance a exceção, se tiver recebendo um throw , capture este error com catch, e replique do jeito que recuperou relançando a replica de outro throw com o err capturado, passando o lançamento para frente... porque não da certo ficar passando o throw entre camadas sem relançar/replicar... mas se  relançar para frente a cada camada ai sim da certo. ex: exemplo de sucesso é a lib objectValues firstname que captura um throw e relana outro throw com o err capturado...ai sim quem usou capturou a exceção com seus membros de Error e pode manipular.",
  },
  {
    titulo: "Reatribuição editar para campos de objeto",
    categorias: ["reatribuicoes_edicoes",],
    conceito: "#eviteErro não da pra reatribuir preencher campo de objeto com await na frente, faça a retribuição sem o await. // exemploErrado: await campo!.prop! = 'novo' exemploOK: campo!.prop! = 'novo'",
  },
  {
    titulo: "Reatribuição editar para campos de objeto",
    categorias: ["reatribuicoes_edicoes",],
    conceito: "#update objeto: tatica sobreescrever prop de sub objeto - primeiro copia o obj, depois acessa a subPropriedade e passa o novo valor para ela.",
    exemplo: `~~~
    const nObj: Obj = { ...obj }
    nObj.foo.bar = arg
    ~~~`
  },





]

