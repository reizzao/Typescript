import { minLength } from "@externals";

export interface IClienteFisicoArgs extends IClienteFisicoArgsProto {
  nome: string
  sobrenome: string
}

export interface IClienteFisicoArgsProto {
  getNomeCompleto?: () => string
}

export class ClienteFisicoArgs implements IClienteFisicoArgs {
  @minLength(2)
  declare nome: string

  @minLength(2)
  declare sobrenome: string

  private constructor(
    private readonly args: IClienteFisicoArgs
  ) {
    Object.assign(this, args)
  }

  static async createPrototype(a: IClienteFisicoArgs) {
    return new ClienteFisicoArgs(a).args
  }

}