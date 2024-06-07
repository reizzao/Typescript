import { makeID } from "@helpers";
import { IPerfilClienteComp, PerfilClienteComp } from "@perfilCliente";
import { ClienteFisicoArgs } from "@clienteFisico";
import { IClienteFisicoArgs, myRuleTipoPerfilClienteFN } from "@clienteFisico";

export interface IClienteFisicoEntity {
  ID: string
  args: IClienteFisicoArgs
  perfil: IPerfilClienteComp
}

export class ClienteFisicoEntity implements IClienteFisicoEntity {
  public ID: string = makeID()

  private constructor(
    public readonly args: IClienteFisicoArgs,
    public readonly perfil: IPerfilClienteComp,
  ) { }

  static async createFactory(args: IClienteFisicoArgs) {
    const args_request = await ClienteFisicoArgs.createPrototype(args)
    const compPerfil = await PerfilClienteComp.createPrototype(await myRuleTipoPerfilClienteFN())
    return await new ClienteFisicoEntity(args_request, compPerfil)
  }

  getNomeCompleto() {
    return `${this.args.nome} ${this.args.sobrenome}`
  }

}