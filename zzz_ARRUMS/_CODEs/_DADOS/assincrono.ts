[
  {
    titulo: "criar nova promessa",
    conceito:
      "criar nova promessa e encapsular o dado para ser resgatado no futuro",
    contextualizando:
      "// nova promessa recebe uma orderFunction uma funcao anonima com o paramFuncao ..na consequencia invoco este paramFuncao passando para ele o que quero encapsular como promessa e sera resgatado desencapsulado quando desencadear o then no param que o then tiver",
    exemplos: `
    const promessa = new Promise((resolve) => {
      resolve({ nome: 'rei'})
    })

    console.log(typeof promessa) // Object
    // Promise status: fulfilled === realizada

    promessa.then(d => console.log(d))  // {nome: 'rei'}
    `,
  },
];
