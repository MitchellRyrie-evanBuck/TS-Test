/*
 * @Date: 2022-06-01 23:58:58
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-06-02 00:01:23
 * @FilePath: /TS小案例/src/Test/infer.ts
 */


type User = {
  name: string,
  age: number,
  get(a: string): void
}

type GetType<T> = {
  [K in keyof T]: T[K] extends (infer U) ? U : K
}[keyof T]

type valueType = GetType<User>
