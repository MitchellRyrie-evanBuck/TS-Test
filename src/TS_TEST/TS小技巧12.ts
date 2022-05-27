/*
 * @Date: 2022-05-19 22:03:03
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 22:10:25
 * @FilePath: /TS小案例/src/TS小技巧12.ts
 */

type IconSize = LooseAutocomplete<'xs' | 'sm'>

type LooseAutocomplete<T extends string> = T | Omit<string, T>

interface IconProps {
  size: IconSize
}

export const Icon = (props: IconProps) => {
  return (<></>)
}

const complete = () => {
  return (
    <>
    <Icon size= "xs" > </Icon>
    < Icon size = "something" > </Icon>
      < />
  )
}


