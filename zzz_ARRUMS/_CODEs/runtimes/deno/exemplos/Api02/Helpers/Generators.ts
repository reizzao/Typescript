// deno-lint-ignore-file no-unused-vars


export class Generator {
  private constructor() {}

  static makeID(): string {
    return Date.now().toString()
  }
}