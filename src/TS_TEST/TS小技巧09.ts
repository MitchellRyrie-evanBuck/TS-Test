/*
 * @Date: 2022-05-19 14:48:04
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 21:10:36
 * @FilePath: /TS小案例/src/TS小技巧09.ts
 */
export const makeKeyRomover =
  <Key extends string>(keys: Key[]) =>
    <Obj>(obj: Obj): Omit<Obj, Key> => {
      return {} as any
    }

const keyRemover = makeKeyRomover(['a', 'b'])

const newObject = keyRemover({
  a: 1,
  b: 2,
  c: 3,
})
// newObject.c     锁定键  
console.log(newObject)