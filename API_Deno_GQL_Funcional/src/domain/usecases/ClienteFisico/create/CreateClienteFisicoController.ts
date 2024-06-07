import { CreateClienteFisicoEntity, RequestCreateClienteFisicoArgs, factoryClienteFisico } from "@entitys";
import { createClienteFisicoService } from "@usecases";


export async function createClienteFisicoController(
  args: RequestCreateClienteFisicoArgs): Promise<CreateClienteFisicoEntity> {
  const service = await createClienteFisicoService(args)
  return await service
}
