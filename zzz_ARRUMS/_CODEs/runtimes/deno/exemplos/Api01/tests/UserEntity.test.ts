//@ts-ignore

import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import { MakeCreateUser, UserProps } from "../Entitys/User/UserEntity.ts";

const makeSut = (input: UserProps) => {
  return MakeCreateUser(input);
};

const fakeRequestUser1 = {
  nome: "Reinaldo",
  sobrenome: "Zacharias",
  numero: 10,
  casado: true,
  computavel: 10,
};

const User = {
  props: {
    nome: "Reinaldo",
    sobrenome: "Zacharias",
    numero: 10,
    casado: true,
    computavel: 10,
  },
};

Deno.test("user entity test", () => {
  const sut = makeSut(fakeRequestUser1);
  const actual = sut.props.nome;
  // sut.props.nome = "foo";
  // TODO: nao posso deixar mudar fora da classe.
  const expected = User.props.nome;
  console.log(sut);
  assertEquals(actual, expected);
});
