/*
 * @Date: 2022-05-19 14:47:44
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 15:25:58
 * @FilePath: /TS小案例/src/TS小技巧06.ts
 */
import * as React from "react";

const MyComponent = (props: { enabled: boolean }) => {
  return null
}

class MyOtherComponent extends React.Component<{
  enabled: boolean
}>{ }

// type PropsFrom<T> = any

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never




const props: PropsFrom<typeof MyComponent> = {
  enabled: true
}