type dataSourceType = { name: string, data: { name: string, value: number, y: number }[] }
type answer = ['prop', 'sfs']
type dataSource<T extends string[], U> = { [index in T[number]]: U }
type data = dataSource<answer, dataSourceType>
