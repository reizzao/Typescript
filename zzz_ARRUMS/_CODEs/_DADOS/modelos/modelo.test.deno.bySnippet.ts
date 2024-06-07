// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

const Log = (d: any) => console.log(d);

const mockFN = (d: any) => d;

type SutTypes = (
  d: any,
) => { sut: any };

const makeSut: SutTypes = (d) => {
  return {
    sut: mockFN(d),
  };
};

Deno.test("[ Fail >> ... ] deve retornar ...", () => {
  const input = "foo";
  const { sut } = makeSut(input);
  const actual = sut;
  const resultExpected: any = "foo";
  // Log("LOG {{ ACTUAL }} >>>  ", actual);

  expect(actual).toEqual(resultExpected);
});

/* TESTER_CONSOLE ************************************* */

function showFoo() {
  const { sut } = makeSut("foo");

  console.log(sut);
}
showFoo();

export default 1;
