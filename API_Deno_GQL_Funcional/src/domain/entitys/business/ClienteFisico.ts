import { createEntityGeneric } from "@helpers";
import { IPerfilCliente } from "@entitys";
import { factoryPefilCliente } from "@entitys";

export interface CreateClienteFisicoEntity {
  args: RequestCreateClienteFisicoArgs
  perfil: IPerfilCliente
}
export interface RequestCreateClienteFisicoArgs {
  nome: string
  sobrenome: string
  codigoPerfil?: string
}

export async function factoryClienteFisico<A extends RequestCreateClienteFisicoArgs>(data: A): Promise<CreateClienteFisicoEntity> {

  const result: CreateClienteFisicoEntity = {
    args: await createEntityGeneric<A>(data),
    perfil: await factoryPefilCliente()
  }

  return await result
}

