import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";
import { Maker } from "../Helpers/MakerEntity.ts";

const arg1 = { campo1: "rei", campo2: "zachars" };
// const arg2 = { campo1: "renata", campo2: "santos" };

Deno.test("User Entity createUSer", () => {
  const atual = arg1;
  const sutLocal = Maker.CreateUser(atual);
  const where = sutLocal.campo1;
  const expected = "rei";
  console.log("USER CRIADO >> ", sutLocal);

  assertEquals(where, expected);
});
