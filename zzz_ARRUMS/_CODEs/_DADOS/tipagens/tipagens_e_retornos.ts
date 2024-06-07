/*
APRENDIZADO

-- retornos tem tudo a ver com tipagens : afinal tipamos o que estamso retornando.

-- Na checagem para pegar o erro no catch depois na checagem
na origem é obrigatorio lançar um novo erro ex: throw new Error(feedback)

-- evite o method que retorna um throw como badArgsPrimitive - causa: depois da complicações para tipar os retornos ja que se ele retornar vai retornar void e da conflito com o retorno de outros artefatos porque vc tera que colocar este void deste metodo - solução sempre retorne throw new Error generico do js ou new ErrorPersonalizado.

/q exemplo metodo de retorno throw a ser evitado:
// function badArgsPrimitive(f: string): void {
//     throw new Error(f)
// }

*/