/*
 * @Date: 2022-05-19 14:48:12
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 21:42:00
 * @FilePath: /TS小案例/src/TS小技巧10.ts
 */
type CheckForBadArgs<Arg> = Arg extends any[]
  ? "you cannot compare two arrays using deepEqualCompare"
  : Arg

export const deepEqualCompare = <Arg>(
  a: CheckForBadArgs<Arg>,
  b: CheckForBadArgs<Arg>
): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error('you cannot compare two arrays using deepEqualCompare')
  }
  return a === b
}

console.log(deepEqualCompare(1, 2))

deepEqualCompare('22', '333')