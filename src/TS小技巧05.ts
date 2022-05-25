/*
 * @Date: 2022-05-19 14:47:36
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 15:00:45
 * @FilePath: /TS小案例/src/TS小技巧05.ts
 */
export const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return obj[firstKey][secondKey]
}

const obj = {
  foo: {
    a: true,
    b: 2
  },
  bar: {
    c: 'cool',
    d: 2
  }
}

const result = getDeepValue(obj, 'bar', 'd')
console.log(result, 'res')