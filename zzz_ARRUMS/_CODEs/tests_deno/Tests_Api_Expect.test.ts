import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

const meuArray2 = ["um", "dois", "tres"];
const meuPrimitivoTexto = "texto1";
const minhaPromessa = async () => await "promessa chegou";

Deno.test("Testes com a Api Expect : semelhante jest,vitest", () => {
  // funcao que recebe o nosso alvo, desencadeamos outra funcao que avalia o nosso alvo argumentado, e nela argumentamos o que afirmamos ser a resposta certa.

  expect(meuArray2).toEqual(["um", "dois", "tres"]);
  expect(meuPrimitivoTexto).toBe("texto1");
  expect(meuArray2).toContain("tres");
  expect(meuArray2).toHaveLength(3); // afirmar tamanho do array
  expect(Promise.resolve(minhaPromessa())).resolves.toEqual(
    "promessa chegou",
  ); // verificar uma promise, e quando ele resolver Ver se é igual ao que eu passar. obs: a suite nao precisa ser async e nem a chamada da minha promise para verificar ter o await antes na suite de test.
});
