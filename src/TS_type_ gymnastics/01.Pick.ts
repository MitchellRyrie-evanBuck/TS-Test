/*
 * @Date: 2022-05-27 21:05:32
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-27 21:07:04
 * @FilePath: /TS小案例/src/TS_type_ gymnastics/01.Pick.ts
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
interface Todo {
  title: string
  description: string
  completed: boolean
}
type check = 'title' | 'completed'
/* 
  A = {
    title: string;
    completed: boolean;
  }
*/
type A = MyPick<Todo, check>
