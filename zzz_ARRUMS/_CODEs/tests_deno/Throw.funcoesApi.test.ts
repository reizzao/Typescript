// deno-lint-ignore-file no-constant-condition
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

Deno.test({
  name: "[ async ] de forma  metodo .toThrow() confirma se a execucao da funcao lança um throw.",
  only: false,
  async fn() {
    const funcaoQueLancaExcecao = async () => {
      // console.log('msg_1')
      if (10 === 10) {
        throw new Error('msg_1')
      }
      return await 'foo'
    }

    const getAsyncMessageNewErrorThrowTest = async (method: any) => {
      try {
        return await method()
      }
      catch (err: any) {
        return err.message
      }
    }

    expect(await getAsyncMessageNewErrorThrowTest(funcaoQueLancaExcecao)).toEqual('msg_1');

  },

});

Deno.test({
  name: "[ funcaoSincrona ] metodo .toThrow() confirma se a execucao da funcao lança um throw.",
  only: false,
  async fn() {
    const funcaoQueLancaExcecao = () => {
      // console.log('msg_1')
      throw new Error('msg_1')
    }

    expect(() => funcaoQueLancaExcecao()).toThrow();
    // só confirma que foi lançado exceção throw.

    expect(() => funcaoQueLancaExcecao()).toThrow('msg_1');
    // confirma a mensagem exata da exceção lançada.

    expect(() => funcaoQueLancaExcecao()).toThrow();
  },

});


export default 1;