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

// Manipulacao Objeto
/* *************************************************** */

// operador_boleano 'in'  :: verifica se existe a informacao chave key dentro do objeto
// console.log("nome" in user);
// console.log("Reinaldo" in user.nome); // TODO: key.value por enquanto da erro.

/* *************************************************** */

// Object.keys(obj) // retorna um vetor com todas chaves do objeto passado
// console.log(Object.keys(user));

// Object.values(obj) // retorna um vetor com todos os valores do objeto passado - obs: os sub_objetos retornam um objeto com chave e valor.
// console.log(Object.values(user));

// Object.entries(obj) // retorna uma matriz, separando cada chave e valor em vetores/array de string
// console.log(Object.entries(user));

// Mostrar em JSON estruturas de Objeto com o metodo do Obj JSON :: JSON.stringify(alvo) ex: quando retornado objetos [ Object, Object ]
// console.log(JSON.stringify(Object.values(user)));
