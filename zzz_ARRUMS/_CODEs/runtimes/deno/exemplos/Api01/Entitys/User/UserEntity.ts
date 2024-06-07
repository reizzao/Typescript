//@ts-ignore
import { makeID } from "../../app/helpers/makers.ts";
import { Entity } from "../Contracts/Entity.ts";

export interface UserProps {
  userId?: string;
  nome: string;
  sobrenome: string;
  numero: number;
  casado: boolean;
  computavel: number;
}

class User2 extends Entity<UserProps> {
  private constructor(
    props: UserProps,
    id?: string,
  ) {
    super(props, id);
    props.userId = makeID();
  }

  static create(props: UserProps, id?: string) {
    const entity = new User2(props, id);
    return entity;
  }

  showComputavel() {
    // return `O resultado da computavel * 10 é ${User. * 10}`;
  }

  nomeCompleto() {
    // return `${this.props.nome} ${this.props.sobrenome}`;
  }
}

export const MakeCreateUser = (props: UserProps) => User2.create(props);
