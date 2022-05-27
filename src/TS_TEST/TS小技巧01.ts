/*
 * @Date: 2022-05-19 13:22:52
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 13:38:13
 * @FilePath: /TS小案例/src/TS小技巧01.ts
 */
export const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26
}

type SingleFruitCount =
  | {
    apple: number
  }
  |
  {
    banana: number
  }
  |
  {
    pear: number
  };

type FruitCounts = typeof fruitCounts

type NewSingleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number
  }
}[keyof FruitCounts]


const SingleFruitCount: NewSingleFruitCount = {
  apple: 2
}


