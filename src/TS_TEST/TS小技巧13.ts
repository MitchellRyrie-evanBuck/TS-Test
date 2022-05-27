/*
 * @Date: 2022-05-19 22:12:19
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-20 00:16:02
 * @FilePath: /TS小案例/src/TS小技巧13.ts
 */

export type ActionModule = typeof import("./models/constants")

// export type Action = "ADD_TODO" | "REMOVE_TODO" | "EDIT_TODO"
export type Action = ActionModule[keyof ActionModule]
