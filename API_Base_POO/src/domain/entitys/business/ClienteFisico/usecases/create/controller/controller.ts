import { CreateClienteFisicoService, IClienteFisicoArgs, } from "@clienteFisico";
import { Repositories } from "@controlls"

export class CreateClienteFisicoController {

  static async execute(e: IClienteFisicoArgs) {
    const entity = await CreateClienteFisicoService.execute(e)
    const persiste = await Repositories.useRepoClienteFisico.create(entity)
    return await persiste
  }

}