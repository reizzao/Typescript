import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { PIPEjs } from "./lib.js";

const sut = PIPEjs

Deno.test({
  name: "[ NUMBER ] deve retornar o mesmmo dado que entrou que entrou nas Funcoes via pipe .",
  only: false,
  async fn() {
    const data = 10
    const fn1 = (d: any) => d
    const fn2 = (d: any) => d
    const fn3 = (d: any) => d

    const listNumbers = [fn1(data), fn2(data), fn3(data)]

    const res = sut(listNumbers, data)

    console.log("RESULTADO >> ", res)
    expect(res).toEqual(data);
  },

});

Deno.test({
  name: "[ TEXT ] deve retornar o mesmmo dado que entrou que entrou nas Funcoes via pipe .",
  only: false,
  async fn() {
    const data = "FOO"
    const fn1 = (d: any) => d
    const fn2 = (d: any) => d
    const fn3 = (d: any) => d

    const listNumbers = [fn1(data), fn2(data), fn3(data)]

    const res = sut(listNumbers, data)

    console.log("RESULTADO >> ", res)
    expect(res).toEqual(data);
  },

});

export default 1;