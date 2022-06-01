

type AwaitedSelf<T extends Promise<unknown>> =
  T extends Promise<infer V> ?
  V extends Promise<unknown> ? AwaitedSelf<V> : V
  : never








