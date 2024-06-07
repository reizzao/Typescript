export interface ILogAction {
  actionName: string
  author: string
}

export class CreateLogActionEntity {
  constructor(
    public action: ILogAction
  ) {}

  static createEntityPrototype(action: ILogAction) {
    return new CreateLogActionEntity(action)
  }
}