/*
 * @Date: 2022-05-29 22:16:57
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-29 22:17:00
 * @FilePath: /TS小案例/src/TS_type_ gymnastics/05.First of Array.ts
 */

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]


type First<T extends any[]> = T extends [infer P, ...any[]] ? P : never;


type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
