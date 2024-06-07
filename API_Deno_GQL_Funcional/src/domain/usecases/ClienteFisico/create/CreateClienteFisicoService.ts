import { CreateClienteFisicoEntity, RequestCreateClienteFisicoArgs, factoryClienteFisico } from "@entitys";

// Posso fazer algo depois da entidade criada

export async function createClienteFisicoService(
  args: RequestCreateClienteFisicoArgs): Promise<CreateClienteFisicoEntity> {
  const entity = await factoryClienteFisico<RequestCreateClienteFisicoArgs>(args)

  return await entity
}
