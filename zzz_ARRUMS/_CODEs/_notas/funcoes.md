---
marp: true
---

# Funcoes de ordem superior

higher_order_function: funcoes_de_ordem_superior conceito:é uma funcao que
recebe a referencia de uma funcao por param - ou retorna uma funcaoaAnonima que
seria funcoesRepetidas - ou os 2 :: recebe referenciaDeFuncaoe retorna
funcaoAnonima .

embutido_na_linguagem: no js temos embutido na linguagem as
higher_order_function :: map-filter-reduce que entre seusparams um é uma
referenciaDeFuncao.

aplicabilidade: se tiver que criar varias funcoes que o que muda entre elas é só
o retorno do que é retornoFixoMarretado mude para retorno de funcaoAnonima, crie
uma funcao com o nome que faça a junçao destas e substitua esta variavel por uma
funcao, recebendo-a e retornando a e quem for usar/invocar argumenta esta
variavel // legado - retornoFixoMarretado function double(aNumber: number) {
return aNumber * 2 } function triple(aNumber: number) { return aNumber * 3 }
function quadruple(aNumber: number) { return aNumber * 4 }

```
// ao inves de fazer estas 3 funcoes - que duplica, triplica, quadruplica uma
varMarretada - faça uma funcao generica que recebe uma funcao e retorna uma
funcao onde este fatorVariavel seja o arguemnto em funcao.

analise: uma nova funcaoDeOrdemSuperior - que recebe uam funcao - que retorna
uma funcaoAnonima que com a mesma assinatura do que seria a
funcaoMarretadaSemOrdemSuperior recebendo o mesmo paramAlvo e seu retorno seria
este param operando com o variavelParamFuncao recebido na orderFunction

uso: instanciar a orderFunction passando o argDinamico da operacao que precisa o
retorno da funcaoanonimaRetornado - neste resultado que agora é uma funcao passo
o arg que vai operar com o arg da anonima e uso o resultadoGuardado.
```

// exemplos:

// funcao de ordem superior

const getMultiplier = (multiplier: number) => { return function (aNumber:
number) { return aNumber * multiplier; }; };

// uso:

const double = getMultiplier(2); console.log(double(10));

const triple = getMultiplier(3); console.log(triple(10));

const quadruple = getMultiplier(4); console.log(quadruple(10));

```
---
```
