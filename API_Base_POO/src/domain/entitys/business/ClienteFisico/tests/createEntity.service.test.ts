import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoService, IClienteFisicoArgs, myRuleTipoPerfilClienteIS } from "@clienteFisico";
import { Log } from "@externals";

const sut = CreateClienteFisicoService
const argsRequestMock: IClienteFisicoArgs = { nome: "anynome", sobrenome: "anysobrenome" }
const actionCREATE = await sut.execute(argsRequestMock)

Deno.test({
  name: "[ OK ] deve criar a instancia da entidade com a request.",
  only: false,
  async fn() {
    Log("RESULTADO >> ", await actionCREATE)

    expect(await actionCREATE).not.toBeNull();
    expect(await actionCREATE.ID).not.toBeNull();
    expect(await actionCREATE).not.toBeNull();
  },

});

Deno.test({
  name: "[ OK ] deve conter os campos na instancia criada.",
  only: false,
  async fn() {

    expect(await actionCREATE).toHaveProperty("args")
    expect(await actionCREATE).toHaveProperty("perfil")
  },

});

Deno.test({
  name: "[ OK ] deve conter metodo computado na criacao da entidade.",
  only: false,
  async fn() {
    const action = actionCREATE.getNomeCompleto?.()
    // Log("RESULTADO COMPUTADO >> ", action)
    const computedGetNomeCompleto = `${argsRequestMock.nome} ${argsRequestMock.sobrenome}`

    expect(action).not.toBeFalsy();
    expect(action).toEqual(computedGetNomeCompleto);
  },

});

Deno.test({
  name: "[ OK ] deve conter a composicao do subObjeto perfilCliente com valores validos e o tipo { DEFAULT } de cliente deve ser NORMAL na instancia da entidade.",
  only: false,
  async fn() {
    const action = actionCREATE.perfil

    expect(action.id_perfil).not.toBeNull();
    expect(action.tipo).toBe(myRuleTipoPerfilClienteIS.text);
  },

});

// TODO - TESTAR REPO EM MEMORIA NA CRIACAO



export default 1;