//@ts-ignore
import { readFileSync } from "https://deno.land/std@0.152.0/node/fs.ts";

export const useReadFileJson = (context: string) => {
  const content = readFileSync(`../data/Json/${context}.json`, "utf-8");
  return JSON.parse(content);
};
