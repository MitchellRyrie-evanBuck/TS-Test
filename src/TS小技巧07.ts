/*
 * @Date: 2022-05-19 14:47:52
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 15:33:58
 * @FilePath: /TS小案例/src/TS小技巧07.ts
 */

export const myObject = {
  a: 1,
  b: 2,
  c: 3
}

const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[]
}

objectKeys(myObject).forEach(key => {
  console.log(myObject[key])
})



