// deno-lint-ignore-file no-explicit-any ban-types prefer-const

/*
 * ts: PIPE COM ARG ASYNC PROMESSA QUE DORME ANTE DE DAR VALOR
 * tecnica: fazer uma Promessa que executa uma funcionalidade dentro de um setTimeout
 * Funcionalidade_Para_Demora_De_Um_Artefato: artefato que nova promessa , que tambem devolve funcao e opcao de escolha de tempo de espera
 */

// deno-lint-ignore-file no-unused-vars no-explicit-any prefer-const ban-types require-await

// PIPE ASYNC OK

type Arg = {
  nome: string;
  idade: number;
};
type FnsFN = (d: Arg) => Promise<Arg>;
type PipeType = (data: Arg) => Promise<Arg>;

const fn1: FnsFN = async (d) => await d;
const fn2: FnsFN = async (d) => await d;
const fn3: FnsFN = async (d) => await d;

const listFns: FnsFN[] = [fn1, fn2, fn3];

const Pipe: PipeType = async (data) =>
  await listFns.reduce(async (acc: any, fn: Function) => await fn(acc), data);

const input = {
  nome: "reinaldo",
  idade: 45,
};

console.time();
Pipe(input).then((d) => console.log(d));
console.timeEnd();
