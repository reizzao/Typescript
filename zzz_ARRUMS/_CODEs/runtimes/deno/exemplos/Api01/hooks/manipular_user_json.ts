//@ts-ignore
import { useReadFileJson } from "./UseJson.ts";

const docUser = {
  nome: "user",
};

console.log(useReadFileJson(docUser.nome));
