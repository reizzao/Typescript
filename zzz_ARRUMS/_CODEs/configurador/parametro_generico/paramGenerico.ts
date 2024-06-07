// Um Parametro Generico em ts

type Param1 = string;

const funcaoNome = <F extends Param1>(data: F) => data;

console.log(funcaoNome("foo"));

/*
macete: define o tipo do param generico antes dos () parenteses

tutorial: https://stackoverflow.com/questions/62233382/how-do-i-define-and-call-a-generic-function-parameter-in-typescript

*/

