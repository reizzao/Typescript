import { LogActionRepository, ILogAction } from "@logAction";

export class LogActionRepositoryMemory implements LogActionRepository {
  public items: ILogAction[] = []

  async create(data: ILogAction) {
    this.items.push(data)
    return await data
  }

  async list() {
    return await this.items
  }

}