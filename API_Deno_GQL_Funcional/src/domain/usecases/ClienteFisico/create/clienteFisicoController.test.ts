import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { RequestCreateClienteFisicoArgs } from "@entitys";
import { createClienteFisicoController } from "@usecases";

const sut = createClienteFisicoController

Deno.test({
  name: "[ OK ] deve retornar a instancia da entidade clienteFisico.",
  only: false,
  async fn() {
    const mockRequestCreateClienteFisicoArgs1: RequestCreateClienteFisicoArgs = {
      nome: "um", sobrenome: "umm"
    }
    const i1 = await sut(mockRequestCreateClienteFisicoArgs1)
    console.log("ENTIDADE CRIADA >> ", i1)

    expect(i1.args.nome).toEqual("um");
  },

});

export default 1;