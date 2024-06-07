import { IClienteFisicoEntity } from "@clienteFisico";

export const seedEntityClienteFisicoONE: IClienteFisicoEntity = {
  ID: "1",
  args: {
    nome: "anynomeONE",
    sobrenome: "anysobrenomeONE"
  },
  perfil: {
    id_perfil: "1",
    tipo: "NORMAL"
  }
}

export const seedEntityClienteFisicoTWO: IClienteFisicoEntity = {
  ID: "2",
  args: {
    nome: "anynomeTWO",
    sobrenome: "anysobrenomeTWO"
  }, perfil: {
    id_perfil: "2",
    tipo: "NORMAL"
  }
}