// deno-lint-ignore-file prefer-const
import { Generator } from "../../../Helpers/Generators.ts";
import { ArgsUser, PropsUser } from "./User.contract.ts";

export class User {
  private static collectionUser: PropsUser[] = [];
  private static collectionLixeiraUser: PropsUser[] = [];

  private constructor(private readonly p: PropsUser) {}

  static Users() {
    return User.collectionUser;
  }

  static ListLixeiraUsers() {
    return User.collectionLixeiraUser;
  }

  static ClearLixeira() {
    return User.collectionLixeiraUser = [];
  }

  static Create(p: ArgsUser) {
    const newData: PropsUser = {
      id: p.id ?? Generator.makeID(),
      campo1: p.campo1,
      campo2: p.campo2,
    };
    User.collectionUser.push(newData);
    return newData;
  }

  static FindById(id: string) {
    return User.collectionUser.find((i) => i.id === id);
  }

  static Update(id: string, newData: ArgsUser) {
    const cap = User.collectionUser.find((i) => i.id === id)!;
    cap.campo1 = newData?.campo1;
    cap.campo2 = newData?.campo2;
    return cap;
  }

  static Remove(id: string): boolean {
    let list = User.collectionUser;
    const cap = list.find((i) => i.id === id)!;
    const index = list.indexOf(cap);

    if (!cap) {
      return false;
    }
    list.splice(index, 1);
    User.collectionLixeiraUser.push(cap);
    return true;
  }
}
