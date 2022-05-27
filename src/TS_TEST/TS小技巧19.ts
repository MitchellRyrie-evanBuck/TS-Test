/*
 * @Date: 2022-05-20 00:48:19
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-20 02:48:32
 * @FilePath: /TS小案例/src/TS小技巧19.ts
 */
interface Animal {
  name: string
}

interface Human {
  firstName: string
  lastName: string
}

export const getDisplayName = <TItem extends Animal | Human>
  (item: TItem)
  : TItem extends Human ? { humanName: string } : { animalName: string } => {
  if ("name" in item) {
    return {
      displayName: item.name
    }
  }
}

const result = getDisplayName({
  name: "Patch"
})
const result2 = getDisplayName({
  firstName: "Matt",
  lastName: "Pocock"
})

