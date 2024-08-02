import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { Reducer } from "./lib.ts";

const sut = Reducer

Deno.test({
  name: "[ NUMBER ] deve retornar A SOMA de todos dados que entraram.",
  only: false,
  async fn() {
    const data = 10
    const initialNumber = 0
    const fn1 = (d: number) => d
    const fn2 = (d: number) => d
    const fn3 = (d: number) => d

    const listNumbers = [fn1(data), fn2(data), fn3(data)]

    const res = sut(listNumbers, initialNumber)
    const expected = 30

    console.log("RESULTADO >> ", res)
    expect(res).toEqual(expected);
  },

});

export default 1;