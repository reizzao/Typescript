import { IMyRulesIS, IMyRulesISFN } from "@externals";

// Objects use functions -- My rule is :
export const myRuleTipoPerfilClienteIS: IMyRulesIS = { text: "NORMAL" }


// Functions RulesSystem for use code
export const myRuleTipoPerfilClienteFN: IMyRulesISFN = async (
  target = myRuleTipoPerfilClienteIS.text!,
  myRule = myRuleTipoPerfilClienteIS,
  msgError = "Ops... Erro ao executar regra para TipoCliente"
) => {
  if (myRule.text !== target) {
    throw new Error(msgError)
  }
  return await myRule.text
}

