/*
import { compose } from '../.history/src/TS小技巧04_20220519143836';
 * @Date: 2022-05-19 14:35:13
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 14:46:47
 * @FilePath: /TS小案例/src/TS小技巧04.ts
 */

export function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;

export function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

export function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (input: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

export function compose(...args: any[]) {
  return {} as any
}

const addOne = (a: number) => {
  return a + 1
}

const numToString = (a: number) => {
  return a.toString()
}

const stringToNum = (a: string) => {
  return parseInt(a)
}

const addOneToString = compose(addOne, numToString, stringToNum)
console.log(addOneToString)