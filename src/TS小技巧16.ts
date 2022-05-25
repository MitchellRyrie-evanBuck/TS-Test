
export const MyObj: Record<string, string[]> = {}

if(!MyObj.foo){
  MyObj.foo = []
}


MyObj.foo?.push("bar")

