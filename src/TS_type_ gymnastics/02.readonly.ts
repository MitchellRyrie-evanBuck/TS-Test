/*
 * @Date: 2022-05-27 23:46:13
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-28 13:22:48
 * @FilePath: /TS小案例/src/TS_type_ gymnastics/readonly.ts
 */

{

  type READONLYS<T> = {
    readonly [K in keyof T]: T[K]
  }

  interface Todos {
    title: string,
    description: string,
  }

  type B = READONLYS<Todos>
}



