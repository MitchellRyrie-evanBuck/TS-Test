

const result = ' hello world '

type Trimable = " " | "\t" | "\n";

type TrimLeft<S extends string> = S extends `${Trimable}${infer U}` ? TrimLeft<U> : S;
type TrimRight<S extends string> = S extends `${infer U}${Trimable}` ? TrimRight<U> : S;

type Trim<S extends string> = TrimLeft<TrimRight<S>>;

type asd = TrimLeft< typeof result>