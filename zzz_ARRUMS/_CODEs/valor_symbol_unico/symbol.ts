// deno-lint-ignore-file no-unused-vars
//
// const primeiroNome = 'primeiroNome';

// definindo objeto com props unicas symbol
interface Person {
  readonly primeiroNome: string;
  sobrenome: string;
  nomeCompleto?: () => string;
}

const person1: Person = {
  ["primeiroNome"]: "reinaldo",
  ["sobrenome"]: "zacharias junior",

  nomeCompleto(this: Person) {
    return `${this?.primeiroNome} ${this?.sobrenome}`;
  },
};

const person2: Person = {
  ["primeiroNome"]: "gustavo",
  ["sobrenome"]: "eduardo dos s. z.",

  nomeCompleto(this: Person) {
    return `${this?.primeiroNome} ${this?.sobrenome}`;
  },
};
// console.log(person1.primeiroNome === person2.primeiroNome);
// console.log(person1.primeiroNome);
// console.log(person1.primeiroNome);
// console.log(person1.sobrenome);
console.log(person1?.nomeCompleto?.());
console.log(person2?.nomeCompleto?.());

/*
tutorial: https://www.treinaweb.com.br/blog/javascript-voce-sabe-o-que-sao-e-por-que-usar-symbols
*/
