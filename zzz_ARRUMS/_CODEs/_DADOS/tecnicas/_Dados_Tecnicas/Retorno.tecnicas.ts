// deno-lint-ignore-file no-unused-vars

const retorno_tecnicas = [
  {
    titulo: "tecnica pegar retorno de promessa tratada com tryCatch para test",
    categorias: ["retorno_de_promessas", "test"],
    contexto: "pegar retorno de promessa tratada com tryCatch",
    conceito: `
    1. fazer uma funcaoPromessa -> com trycatch que como sucesso -> tenta o retornar a execução da promessa.
    2. no catch -> pegar a .message do erro
    3. na suiteTest -> guardar em variavelLink a execucao da funcaoPromessa
    4. será guardado o que deseja usar da funcaoPromessa no test - desencadear .then() para guardar o sucesso || ou desencadear .catch() para guardar a falha com o feedback ..DAI SÓ TESTAR O GUARDADO. #importante #naoEsqueca ao usar o guardadoLink insira   o await na frete pra esperar a resolução da promessa guardada.
    `,
    observacoes: `
    // EXEMPLOS
    const guardaSucesso = funcaoPromessa().then(ok => ok) // terei o ok
    const guardaFalha = funcaoPromessa().catch(err => err) // terei a falha com o feedback
    `,
  },
]

