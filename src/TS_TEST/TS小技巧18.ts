/*
 * @Date: 2022-05-20 00:48:12
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-20 01:50:29
 * @FilePath: /TS小案例/src/TS小技巧18.ts
 */
import { createPost } from "./models/createPost"

export class SDK {
  constructor(public loggedInUserId?: string) { }

  createPost(title: string) {
    this.assertUserIsLoggedIn()
    createPost(this.loggedInUserId, title)
    this.wow
  }
  assertUserIsLoggedIn(): asserts this is this & {
    loggedInUserId: string
    wow: boolean
  } {
    if (!this.loggedInUserId) {
      throw new Error("User is not logged in")
    }
  }
}





