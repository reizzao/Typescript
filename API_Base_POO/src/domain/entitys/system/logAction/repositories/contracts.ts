import { ILogAction } from "../index.ts";

export interface LogActionRepository {
  create: (data: ILogAction) => Promise<ILogAction>
  list: () => Promise<ILogAction[]>
}