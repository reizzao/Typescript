import { actionLogRepositoryInUSE } from "../../../index.ts";

export class ListActionLog {

  static async execute() {
    return await actionLogRepositoryInUSE.list()
  }

}