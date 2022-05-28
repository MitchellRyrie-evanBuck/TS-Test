/*
 * @Date: 2022-05-28 14:20:25
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-28 14:23:31
 * @FilePath: /TS小案例/src/TS_type_ gymnastics/04.returnType.ts
 */
const washDog = () => {
  return {
    dogName: 'linlin',
    dogAge: 20,
    dogKind: 'husky'
  }
}

type returnTypes<T> = T extends (...args: any[]) => (infer U) ? U : never;

// type WashTicket = ReturnType<typeof washDog>
type WashTicket = returnTypes<typeof washDog>
