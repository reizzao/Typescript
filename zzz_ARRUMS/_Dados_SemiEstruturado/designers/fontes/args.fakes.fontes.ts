// deno-lint-ignore-file no-empty-interface no-unused-vars ban-unused-ignore
import { FontesArgs } from "./fontes.ts"

interface FakeFontes {
  ONE: FontesArgs
  TWO: FontesArgs
}

const fakeArgsFontes: FakeFontes = {
  ONE: {
    categoria: "fontes",
    titulo: "font JetBrainsMono Nerd Font Mono Regular",
    contexto: "escritorio",
    detalhe: "JetBrainsMono Nerd Font Mono Regular",
    inspiracao: "font do terminal do terminalRoot",
    link: "#todo",
  },
  TWO: {
    categoria: "fontes",
    titulo: "font fantasque sans mono",
    contexto: "escritorio",
    detalhe: "font fantasque sans mono",
    inspiracao: "font do terminal do terminalRoot",
    link: "https://www.fontsquirrel.com/fonts/fantasque-sans-mono",
  }

}
export { fakeArgsFontes }

