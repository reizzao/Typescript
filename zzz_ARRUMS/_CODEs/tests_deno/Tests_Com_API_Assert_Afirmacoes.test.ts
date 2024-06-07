// deno-lint-ignore-file no-unused-vars
import {
  assertArrayIncludes,
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.176.0/testing/asserts.ts";
import {
  assertArrayContains,
  assertStringContains,
} from "https://deno.land/std@0.74.0/testing/asserts.ts";
// obs: assertStringContains é outra lib como importada acima

const meuValor = "Programador Reinaldo Zacharias";
const meuArray = ["um", "tres", "Nove"];

Deno.test("Primeiro test com api assert", () => {
  // assertEqual
  assertEquals(
    meuValor,
    "Programador Reinaldo Zacharias",
    "Ops.. MENSAGEM DE ERRO!",
  );
  // assertEquals == è igual

  assertStringIncludes(meuValor, "Pro", "Ops.. MENSAGEM DE ERRO!");
  // assertStringIncludes == se o texto contem o que passei obs: nao é caseSensitive aceita maiuscual e minuscula.

  assertArrayIncludes(meuArray,["um", "tres", "Nove"],"Ops.. MENSAGEM DE ERRO!", );
  // assertArrayIncludes == verifica tudo que tem no array entao tem que apssar tudo que o array tem.
});

Deno.test("Testando com a lib assertContains - Se conter uma ocorrencia ja passa", () => {
  assertStringContains(meuValor, "Reinaldo", "Ops.. MENSAGEM DE ERRO!");
  // assertStringContains == contem no texto esta ocorencia.

  assertArrayContains(meuArray, ["um"], "Ops.. MENSAGEM DE ERRO!");
  // assertArrayContains >> contem no array esta ocorrencia. obs: tem que passar dentro de [] delimitador de array mesmo que queira verificar somente uma  ocorrencia.
});
