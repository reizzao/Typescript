// deno-lint-ignore-file no-unused-vars no-explicit-any

// OBJETOS - Optional_chaining :: encadeamentoOpcional verificacao de campos de objeto para uso

const user = {
  nome: "Reinaldo",
  idade: 45,
  // endereco: {
  //   rua: "rua foo",
  //   numero: 10,
  // },
};

const obj2 = {
  nome: "Reinaldo",
  idade: 45,
  endereco: {
    rua: null,
  },
};

// forma manual legado: >> se no obj a prop existe faça isto, senao faça estaOutraOpcao
// console.log(user.endereco ? endereco : "nao existe");

/*
Optional_chaining ::
traducao: encadeamentoOpcional
categoria: "uso de membros de objeto"
aplicabilidade: a verificacao é feita somente quando o objeto e seus membros passado como valorDireita 'uso de membros de objeto' se nada tiver usa o ?? e da um outro valorPadrao.
conceito: verificacao de campos e metodos de objeto para uso.

beneficio: vai verificar se existem as props no objeto usado e se nao existir nao vai travar/crachear a saida do codigo, vai somente retornar undefined se nao existir ou nulo senao tiver valorValido e podemos pegar estes retornos invalidos e fazer algum tratamento.

dica: faça a verificacao Optional_chaining a cada profundidade do objeto.

sintaxe: objeto <?> <.>

narracao: seExistir ? abra . proximaProp

macete: sempre ?. interrogacaoPonto antes de prop que possa nao existir ou ser valida

tratar_retorno:  colocando após a verificacao ?? <o que quer retornarCasoNaoSejaValido os valores do verificado>

*/

// verificando se as props existem no uso
/* console.log(user?.endereco);
console.log(obj2?.endereco?.rua);
console.log(obj2?.endereco?.naoExisteSubKey); */

// tratando possivel valor invalido com operador de coalescencia nula ao inves de pegar o null ou undefined
// console.log(obj2?.endereco?.naoExisteSubKey ?? "nao informado");
