//@ts-ignore
export default async (...args) => {
  //@ts-ignore

  const res = await fetch(...args)

  return res.json()
}
