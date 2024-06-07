import { ClienteFisicoRepositoryMemory } from "@clienteFisico";


export class Repositories {
  // options
  static optionsRepoClienteFisico = {
    memory: new ClienteFisicoRepositoryMemory
  }

  // use props in app
  static useRepoClienteFisico = Repositories.optionsRepoClienteFisico.memory



}