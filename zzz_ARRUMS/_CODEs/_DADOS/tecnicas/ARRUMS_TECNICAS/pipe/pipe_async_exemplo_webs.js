const tipos = ['leite', 'manteiga', 'pão'];
const precos = [23, 21, 32];

const buscarPreço = (tipo) => new Promise((res) => {
  const indice = tipos.indexOf(tipo);
  setTimeout(() => res(precos[indice]), 500);
});

const somar = async() => {
  const compras = ['leite', 'leite', 'manteiga', 'pão', 'pão', 'pão'];
  return compras.reduce(async(_soma, tipo, i) => {
    const soma = await _soma;
    const valor = await buscarPreço(tipo);
    console.log('A calcular a posição', i);
    return soma + valor;
  }, Promise.resolve(0));
}

somar().then(soma => console.log(soma));