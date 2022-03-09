const cssUnitByType = (
  value:
    | string
    | number
    | Record<string, string | number | boolean>
    | undefined,
  defaultValue?: typeof value
) => {
  switch (typeof value) {
    case 'string':
      return value
    case 'number':
      return value + 'px'
    default:
      return defaultValue
  }
}

export default cssUnitByType
