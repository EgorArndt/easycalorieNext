const extract = (
  object: { [key: string]: string },
  key: keyof typeof object
) => {
  if (Object.keys(object).length === 1) return object[key]
}

export default extract
