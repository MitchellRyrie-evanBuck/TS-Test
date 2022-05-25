/*
import { type } from '../.history/src/TS小技巧02_20220519135125';
 * @Date: 2022-05-19 13:43:06
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 14:04:02
 * @FilePath: /TS小案例/src/TS小技巧02.ts
 */
/*
 * 动态添加类型ID 
*/

export type Entity =
  | {
    type: 'user'
  }
  | {
    type: 'post'
  }
  | {
    type: 'comment'
  }


// type EntittyWidthId = | {
//   type: 'user',
//   userId: string
// } | {
//   type: 'post',
//   postId: string
// } | {
//   type: 'comment',
//   commentId: string
// }

type EntittyWidthId = {
  [EntityType in Entity['type']]: {
    type: EntityType
  } & Record<`${EntityType}Id`, string>
}[Entity['type']]

const result: EntittyWidthId = {
  type: 'comment',
  commentId: '123'
}


