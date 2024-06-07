import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { seedEntityClienteFisicoONE, seedEntityClienteFisicoTWO } from "@clienteFisico";
import { Log } from "@externals";
import { Repositories } from "@controlls";

const sut = Repositories.optionsRepoClienteFisico.memory
let sutBD = sut.items
function cleanBD() {
  sutBD = []
}

Deno.test({
  name: "[ OK ] deve retornar os items criados e gravados no repo em memoria",
  only: false,
  async fn() {
    await sut.create(seedEntityClienteFisicoONE)
    await sut.create(seedEntityClienteFisicoTWO)
    Log("RESULTADO NA BASE DE DADOS EM MEMORIA >> ", await sut.list())

    expect(sutBD.length).toEqual(2);
  },

});

Deno.test({
  name: "[ OK ] deve listar todos os items gravados no repo em memoria",
  only: false,
  async fn() {
    cleanBD()
    await sut.create(seedEntityClienteFisicoONE)
    await sut.create(seedEntityClienteFisicoTWO)
    // Log("RESULTADO NA BASE DE DADOS EM MEMORIA >> ", await sut.list())

    // expect(await sut.list()).toContain([seedEntityClienteFisicoONE, seedEntityClienteFisicoTWO]);
  },

});

export default 1;