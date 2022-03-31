export type UnknownObject = Record<string, unknown>

export type OneOf<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer OneOf
>
  ? OneOf
  : never
