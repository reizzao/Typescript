import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { reduceJS } from "./lib.js";

const sut = reduceJS

Deno.test({
  name: "[ NUMBER ] deve retornar A SOMA de todos dados que entraram.",
  only: false,
  async fn() {
    const data = 10
    const fn1 = (d: any) => d
    const fn2 = (d: any) => d
    const fn3 = (d: any) => d

    const listNumbers = [fn1(data), fn2(data), fn3(data)]

    const res = sut(listNumbers, data)

    console.log("RESULTADO >> ", res)
    expect(res).toEqual(40);
  },

});

export default 1;