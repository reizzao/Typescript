import { makeID } from "@helpers";

export interface IPerfilClienteComp extends IPerfilClienteCompProto {
  id_perfil: string
  tipo: string
}

interface IPerfilClienteCompProto {
  create?: () => IPerfilClienteComp
}

export class PerfilClienteComp {

  public readonly id_perfil: string = makeID()

  constructor(
    public readonly tipo: string
  ) { }

  static async createPrototype(tipo: string) {
    return await new PerfilClienteComp(tipo)
  }

}