/*
 * @Date: 2022-05-19 21:47:33
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 21:56:52
 * @FilePath: /TS小案例/src/TS小技巧11.ts
 */

export type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> { }

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>
}

interface Post {
  id: string;
  comments: { value: string }[];
  meta: {
    name: string;
    description: string
  }
}

const post: DeepPartial<Post> = {
  id: '1',
  comments: [{}],
  meta: {
    description: '1234'
  }
}












