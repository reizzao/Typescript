// Exemplo :: TypescriptCRUDL_InMemory_Classe

interface PropsEntity {
  id: string;
  campo1: string;
  campo2: string;
}

interface ArgsEntity {
  id?: string;
  campo1: string;
  campo2: string;
}

// funcoes auxiliares
const makeID = () => Date.now().toString();

//

class Entity {
  private static listEntity: PropsEntity[] = [];
  private static collectionLixeiraEntity: PropsEntity[] = [];

  private constructor(private readonly p: PropsEntity) {}

  static Entitys() {
    return Entity.listEntity;
  }

  static ListLixeiraEntitys() {
    return Entity.collectionLixeiraEntity;
  }

  static ClearLixeira() {
    return Entity.collectionLixeiraEntity = [];
  }

  static Create(p: ArgsEntity) {
    const newData = {
      id: p.id ?? makeID(),
      campo1: p.campo1,
      campo2: p.campo2,
    };
    Entity.listEntity.push(newData);
    return newData;
  }

  static FindById(id: string) {
    return Entity.listEntity.find((i) => i.id === id);
  }

  static Update(id: string, newData: ArgsEntity) {
    const cap = Entity.listEntity.find((i) => i.id === id)!;
    cap.campo1 = newData?.campo1;
    cap.campo2 = newData?.campo2;
    return cap;
  }

  static Remove(id: string): boolean {
    let list = Entity.listEntity;
    const cap = list.find((i) => i.id === id)!;
    const index = list.indexOf(cap);

    if (!cap) {
      return false;
    }
    list.splice(index, 1);
    Entity.collectionLixeiraEntity.push(cap);
    return true;
  }
}

//

const req1 = { id: "1", campo1: "r1", campo2: "r2" }; // mandando id para remover
const req2 = { id: "2", campo1: "r2", campo2: "r22" }; // mandando id para atualizar
const req3 = { campo1: "r3", campo2: "r33" };
const req4 = { campo1: "r4", campo2: "r44" };
const req5 = { campo1: "r5", campo2: "r55" };

Entity.Create(req1);
Entity.Create(req2);
Entity.Create(req3);
Entity.Create(req4);
Entity.Create(req5);

console.log(Entity.Entitys());
console.log(Entity.FindById("2"));
console.log(
  Entity.Update("2", { campo1: "modificado2", campo2: "modificado22" }),
);
console.log(Entity.Entitys());

console.log("RETORNO REMOVE >> ", Entity.Remove("1"));
console.log("RETORNO REMOVE >> ", Entity.Remove("55")); // tem que retornar falso nao tem este id "55"

console.log("LIXEIRA >> ", Entity.ListLixeiraEntitys());
console.log("LIMPA >> LIXEIRA >> ", Entity.ClearLixeira());
console.log("LIXEIRA DEPOIS DE LIMPA >> ", Entity.ListLixeiraEntitys());

console.log("LISTA ATUALIZADA :: ", Entity.Entitys());
