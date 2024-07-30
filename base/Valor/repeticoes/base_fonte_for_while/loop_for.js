const arrayAlvo = [10, 20, 30];

const operacao = (item, mudanca) => item + mudanca;

for (i = 0; i < arrayAlvo.length; i++) {
  let item = arrayAlvo[i];
  let acc = operacao(item, 1000);
  console.log(acc);
}

/*
For:
objetivo: de repetir algo, mantendo o controel dessa repeticao para nao cair em loop infinito.
sao 3 blocos separados por ponto e virgula.

aplicabilidade: vai agir sobre um array de dados.

comportamento do loop:
variavel_iterador_controladora: vamos ter que usar sempre a VARIAVEL_ITERADORA (pode ser abrevida) em cada bloco tem que ser sempre usada a VAR_ITERADORA primeiro para controla-la importante ELA É O ITEM A CADA VOLTA DA ITERACAO, a regra é que seja do mesmo TIPO dos items que tem no arrayAlvo, inicializa-la e controla-la nos outros blocos.
- recurso : para pegar o itemAtual a cada volta use o arrayAlvo[ na posicao do itemAtual que é a variavel_iterador ex: arrayAlvo[i] ]

1º bloco: inicializacao: esta incializacao pode ser um valorZero do tipo de dado a ser usado ou um valor Desejado para inicio ams a regra é que seja do mesmo tipo do alvo.

2º bloco: condicao de execucao: controla a repeticao da execucao, a var iteradora inicial tem que ser verdadeiro TRUE para continuar repetindo a instrucao passada por consequencia que é oa operacao de objetivo a cada volta do loop - quando esta condicao for falsa ele para de execuatr o loop.

3º bloco: passos, quantidade de passos que vamos dar a cada volta e modificar a variavel controladora inicial para que ela se torne FALSE e pare o loop.

*/
