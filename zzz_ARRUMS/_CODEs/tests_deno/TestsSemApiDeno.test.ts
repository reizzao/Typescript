// deno-lint-ignore-file prefer-const

let time = "Corinthians";
let time2 = "Vasco";

Deno.test("Test Time [NO_API]", () => {
  if (time != "Corinthians") {
    throw new Error(`Nao acertou meu time ${time} >> Entao falhou !!!`);
  }
});

Deno.test("Test Time2 [NO_API]", () => {
  if (time2 != "Vasco") {
    throw new Error(`Nao acertou meu time ${time} >> Entao falhou !!!`);
  }
});
