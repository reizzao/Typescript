import { ClienteFisicoEntity, IClienteFisicoArgs } from "@clienteFisico";

export class CreateClienteFisicoService {

  static async execute(e: IClienteFisicoArgs) {
    const entity = await ClienteFisicoEntity.createFactory(e)

    // await CreateLogActionController.create({
    //   actionName: "criacao da entidade clienteFisico",
    //   author: entity.ID
    // })

    return await entity
  }

}