const nome = "rei";
const idade = 45;

// mergiando de forma moderna short_curt
const userRei1 = {
  nome,
  idade,
};

// mergiando de forma manual legado
const userRei2 = {
  nome: nome,
  idade: idade,
};

console.log(userRei1);
console.log(userRei2);
/*
copiar_por_aproximacao_variaveis_para_objeto:
sintaxe_curta:
conceito: quando variaveis proximas tem o mesmo nome de props de um objeto ele faz uma combinacao/match/bind entre eles

aplicabilidade: criar um novo objeto apartir de variaveis soltas.
*/
