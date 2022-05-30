/*
 * @Date: 2022-05-30 14:08:59
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-30 14:12:01
 * @FilePath: /TS小案例/src/TS_type_ gymnastics/06.ecclude.ts
 */
type MyExclude<T, U> = T extends U ? never : T;

type a = 'a' | 'b' | 'ert'
type b = 'b'
type MyResult = MyExclude<a, b>
