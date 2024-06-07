// deno-lint-ignore-file no-empty-interface

import { fakeArgsFontes } from "./args.fakes.fontes.ts"

interface FontesArgs {
  categoria: string
  titulo: string
  contexto: string
  detalhe: string
  inspiracao: string
  link: string
}

interface FontesModel extends FontesArgs { }
type CreateFontesFN = (d: FontesArgs) => Promise<FontesModel>

interface RepoFontes {
  _items?: FontesModel[]
  create: (d: FontesArgs) => Promise<FontesModel>
  list: () => Promise<FontesModel[]>
}

const repoFontes: RepoFontes = {
  _items: [],

  async create(d) {
    await this._items?.push(d)
    return await d
  },

  async list() {
    return await this._items!
  }
}

const createFontes: CreateFontesFN = async (d) => {
  return await repoFontes?.create(d)
}

await createFontes(fakeArgsFontes.ONE)
await createFontes(fakeArgsFontes.ONE)

export {
  type FontesArgs,
}

repoFontes.list().then(ok => console.log(ok))
