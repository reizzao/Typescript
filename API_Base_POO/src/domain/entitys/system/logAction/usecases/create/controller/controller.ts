import { ILogAction, CreateLogActionEntity, actionLogRepositoryInUSE } from "@logAction";


export class CreateLogActionController {

  static async create(data: ILogAction) {
    const insertRepo = await actionLogRepositoryInUSE.create(data)
    return await CreateLogActionEntity.createEntityPrototype(insertRepo)
  }

}