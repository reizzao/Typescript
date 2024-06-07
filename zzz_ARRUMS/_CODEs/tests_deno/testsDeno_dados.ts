[
  {
    titulo: "",
    categorias: ["test_deno"],
    conceito: `

   `,
  },
  {
    titulo: "test only exclusivo",
    categorias: ["test_deno"],
    conceito: `
    1. Adicione no primeiro param do Dest() o objeto :

    { name: "deve retornar ",
      only: true, // apos o test passe para false - evita erro no tests globais
      async fn() {
        // aqui seu codigo para o test
        expect(where).toEqual(assertion);
      },
      // obs: PARA RODAR ONLY SÓ ESTE TEST \`deno test <caminhoDesteArquivo>\`
    }

    1. PARA RODAR ONLY SÓ TEST PATICULAR deno test \`<caminhoDesteArquivo>\`
   1. observacao apos terminar o test only marque para flalse eta opcao senao retorna erro nos test globais.
   `,
  }
];
