// deno-lint-ignore-file no-unused-vars
//@ts-ignore

// url_test.ts
import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

Deno.test("nome do meu test é soma", () => {
  const actual = 1 + 2;
  const expected = 3;
  assertEquals(actual, expected);
});

Deno.test("nome do meu test é soma2", () => {
  const actual = 10 + 10;
  const expected = 20;
  assertEquals(actual, expected);
});
