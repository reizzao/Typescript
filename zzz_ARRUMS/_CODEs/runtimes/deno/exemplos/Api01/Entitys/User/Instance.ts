//@ts-ignore

import { MakeCreateUser } from "./UserEntity.ts";

const u1 = MakeCreateUser({
  nome: "Reinaldo",
  sobrenome: "Zacharias",
  numero: 10,
  casado: true,
  computavel: 10,
});

// u1.props.nome = "foo";
// u1.props.nome = "bar";

console.log(u1);
console.log(u1.showComputavel());
console.log(u1.nomeCompleto());
