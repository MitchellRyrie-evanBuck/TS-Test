/*
 * @Date: 2022-05-19 14:05:49
 * @LastEditors: liuxiaowen
 * @LastEditTime: 2022-05-19 14:13:06
 * @FilePath: /TS小案例/src/TS小技巧03.ts
 */
import { String, Union } from "ts-toolbelt";

const query = `/home?a=foo&b=wow`

type Query = typeof query
type SecondQueryPart = String.Split<Query, "?">[1]
type QueryElements = String.Split<SecondQueryPart, "&">

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [key in String.Split<QueryElement, '='>[0]]: String.Split<QueryElement, '='>[1]
  }
}[QueryElements[number]]

const obj: Union.Merge<QueryParams> = {
  a: 'foo',
  b: 'wow'
}
