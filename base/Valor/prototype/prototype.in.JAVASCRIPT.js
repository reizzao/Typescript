function herancePrototypeOfObject(target) {
  return Object.create(target);
}

class ClasseMock1 {
  constructor(c1, c2) {
    this.c1 = c1;
    this.c2 = c2;
  }
  metodo1() {
    return `Ola metodo 1 : minhas props c1= ${this.c1} e c2 = ${this.c2}`;
  }

  acessoOutro() {
    const heranca = herancePrototypeOfObject(outro);
    return heranca.metodoOutroObj();
  }
}

const objeto1 = new ClasseMock1("vcum", "vcdois");
const objeto2 = new ClasseMock1("222", "20000");
console.log(objeto1);
console.log(objeto1.metodo1());

// Comprovar_Prototype: se comparar se são IGUAIS == o objeto1.metodoSemInvocar e o objeto2.metodo_SemInvocarsao  e retornar true, quer dizer estao apontando para o mesmo endereco de memoria entao estao no emsmo prototype
// console.log(objeto1.metodo1 == objeto2.metodo1)

// HERDAR PROTOTYPE DE UM OBJ EM OUTRO
class ClasseMock2 {
  constructor(c1, c2) {
    this.c1 = c1;
    this.c2 = c2;
  }
  metodoOutroObj() {
    return `Ola metodo OutroObj : minhas props c1= ${this.c1} e c2 = ${this.c2}`;
  }
}

const outro = new ClasseMock2("888", "999");

console.log(objeto1.acessoOutro());
