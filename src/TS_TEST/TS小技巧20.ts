/*
 * @Date: 2022-05-20 02:36:30
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-20 02:48:29
 * @FilePath: /TS小案例/src/TS小技巧20.ts
 */
export type Obj = {
  a: "F00",
  a2: "a2",
  a3: "a3",
  b: "b",
  b2: "b2"
}

type ValuesOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<
    keyof Obj, `a${string}`
  >
  > = {
    [K in _ExtractedKeys]: Obj[K]
  }[_ExtractedKeys]


type NewUnion = ValuesOfKeysStartingWithA<Obj>
