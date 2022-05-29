/*
 * @Date: 2022-05-28 13:25:07
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-29 15:27:09
 * @FilePath: /TS小案例/src/TS_type_ gymnastics/03.元组转换为对象.ts
 */
// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键 / 值都是从元组中遍历出来。
// 例如：
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type sr = typeof tuple
type TupleToObject<T extends readonly string[]> = {
  [K in T[number]]: K
}

type result = TupleToObject<typeof tuple>


// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
