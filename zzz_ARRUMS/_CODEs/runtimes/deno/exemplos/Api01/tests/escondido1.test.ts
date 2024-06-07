import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

Deno.test("nome do meu test é escondido1", () => {
  const actual = 1000 + 1000;
  const expected = 2000;
  assertEquals(actual, expected);
});
