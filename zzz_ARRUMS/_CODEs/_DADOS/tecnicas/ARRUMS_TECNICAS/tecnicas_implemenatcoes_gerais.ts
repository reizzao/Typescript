[
  {
    titulo: "",
    categoria: ["", ""],
    conceito: "",
    exemplo: `
    `,
  },
  {
    titulo: "retornar undefined ",
    categoria: ["retorno vazio", "nadaFazer"],
    conceito:
      "precisa de um retorno undefined, nao use a clausula <return> dentro da funcao",
    exemplo: `
    const fnExistOK = async () => {
      await sut(inputOK);
      // vai retornar undefined
    };
    `,
  },
  {
    titulo: "tratar excessao de erro no test",
    categoria: ["test", "tdd"],
    conceito:
      "faça o tratamento dentro de uma funcao e use esta funcao na suite de test .. que assim vc tera a resposta do erro tratado para testar",
    exemplo: `
    const fnTratamentoExcessao = async () => {
      try {
        return await sut(inputFAIL);
      } catch (err: any) {
        return await err.message;
      }
    }

    // usar na suite esta funcao :: fnTratamentoExcessao()
    `,
  },
];
