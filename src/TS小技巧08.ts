/*
 * @Date: 2022-05-19 14:47:58
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 16:06:26
 * @FilePath: /TS小案例/src/TS小技巧08.ts
 */
import React from 'react'

interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}



export function Table<TItem>(props: TableProps<TItem>) {
  return null
}

const Component = () => {
  return (
    <Table<{ id: number }>
      items= {
    [
      {
        id: '1',
        name: 'liu'
      }
    ]}
  renderItem = { item => <div>{ item.id } < /div> }
    < /Table>
  )
}