import { GenericsRepository } from "@helpers"
import { IClienteFisicoEntity } from "@clienteFisico";

export class ClienteFisicoRepositoryMemory implements GenericsRepository<IClienteFisicoEntity> {
  public readonly items: IClienteFisicoEntity[] = []

  async create(data: IClienteFisicoEntity) {
    this.items.push(data)
    return await data
  }

  async list() {
    return await this.items
  }
}