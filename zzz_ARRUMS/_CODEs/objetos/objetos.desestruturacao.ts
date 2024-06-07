// deno-lint-ignore-file no-unused-vars no-explicit-any
// OBJETOS

const user = {
  nome: "Reinaldo",
  idade: 45,
  endereco: {
    rua: "rua foo",
    numero: 10,
  },
};

// DESESTRUTURACAO

// const endereco = user.endereco // Forma tradicional
// const { endereco } = user; // forma moderna
// console.log(endereco);

// pegando outra prop. separe as desejadas por virgula
// const { nome, idade } = user;
// console.log(nome, idade);

// renomear_variavel_de_objeto , após a chave copiada com : 2ponto indique o novo nome da chave , e use este novo nome dai pra frente
// const { idade: age } = user;
// console.log(age);

// valor_padrao_para_prop_copiada:
const { ...novoUser1 } = user;
novoUser1.nome = "novo valor para nome";
// console.log(novoUser1);
/* *************************************************** */

// desestruturando extraindo prop do objeto passado por param.
function mostraNomeUser({ nome, idade }: any) {
  console.log(nome, idade);
}
mostraNomeUser(user);

/* Desestruturacao ***************************************************
traducao: extracao
conceito: desestruturacao é extrair membros e recuperar em variaveisInventadas,
onde_pode_usar: a desestruturacao pode ser usada em todo lugar que tenha referencia para um objeto|array, ex: em copias de objeto, em param de funcoes, dentro de funcoes, classes, etc..ou seja onde tiver usando objeto.

usabilidade: copia ou extrair valores selecionados de um objeto e adicionar em outras variaveis_novas.

extraindo do objeto suas props - obs: dentro de { o que vai ser extraido } = fonte
dica: quando os nomes das variaveis sao iguais coloque a primeira dentro de {} para extrair e elimine a segunda ex: de :: const endereco = user.endereco  para const { endereco } = user
*/

/* Rest ***************************************************
  conceito: Copia de estruturas as propriedades isoladas ou o restante delas

  operador: Operador rest ...3pontos varRecebedoraDoRestante

  sintaxe: { naoCopie, naoCopie2, ...varRestoCopiado } = desteObjetoFonte // use: varRestoCopiado

  aplicabilidade: copiar objeto, com todas ou algumas props.

  copiar_objeto_inteiro : use só os 3pontos e nome da var que vai receber o copiado.

  remover_da_copia_algumas_props: separe em virgulas antes dos 3pontos o que nao sera copiado.
*/

// const { nome, ...resto } = user; // ex: aqui o que tiver em nome nao sera copiado
// console.log(resto);

// copiando objeto inteiro
// const { ...copiaInteira } = user;
// console.log(copiaInteira);

// removendo da copia as props nome, endereco e copiando para a var reesto o restante
// const { nome, endereco, ...resto } = user;
// console.log(resto);
