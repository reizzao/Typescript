import {
  FooClass,
  type FooClassArgs
} from "./1.ts";

const requestONE: FooClassArgs = {
  ID: '1',
  num1: 10,
  num2: 10,
}
const requestTWO: FooClassArgs = {
  ID: '2',
  num1: 10,
  num2: 10,
}
const objClass = new FooClass()

const instanceObjClass = objClass.perform(requestONE)
const instanceObjClassTWO = objClass.perform(requestONE)
const testUniqueSpaceMemory = instanceObjClass.comput1 === instanceObjClassTWO.comput1

console.log(instanceObjClass)
console.log(testUniqueSpaceMemory)