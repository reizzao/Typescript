import { Generator } from "@externals";

export interface IPerfilCliente {
  id: string
  tipo_perfil: string
}

export async function factoryPefilCliente(): Promise<IPerfilCliente> {
  const newPerfil: IPerfilCliente = {
    id: await Generator.makeStringID(),
    tipo_perfil: "TODO VINDO FUNCAO" ?? "NORMAL"
  }
  return await newPerfil
}