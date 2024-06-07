import { ArgsUser } from "../Domain/Entitys/User/User.contract.ts";
import { User } from "../Domain/Entitys/User/User.entity.ts";

export class Maker {
  static CreateUser(a: ArgsUser) {
    return User.Create(a);
  }
}
