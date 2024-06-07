//@ts-ignore
import { makeID } from "../../app/helpers/makers.ts";

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? makeID();
  }

  // showComputavelEntitys() {
  //   // return `O resultado da computavel * 10 é ${this.props * 10}`;
  // }
}
