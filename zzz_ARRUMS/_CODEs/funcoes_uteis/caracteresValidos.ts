// deno-lint-ignore-file no-unused-vars

/**
 * @description hasStartSpecialCharacters() == tem inicio com caracteres especiais () ?
 * @param param0  (s: string)
 * @returns boolean
 * @details checa se começa com letras validas, e se nao pode começar com espaços ou caracteres especiais.
 */

function hasStartSpecialCharacters(s: string): boolean {
  const regex = /^[A-Za-z][\s+\w]+[A-Za-z]+$/;
  return regex.test(s);
}