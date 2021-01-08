const strEnum = <T extends string>(o: Array<T>): { [K in T]: K } =>
  o.reduce((res, key) => {
    res[key] = key
    return res
  }, Object.create(null))
export { strEnum }
