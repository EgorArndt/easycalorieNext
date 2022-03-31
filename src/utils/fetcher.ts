export default async (input: RequestInfo, init?: RequestInit) =>
  await fetch(input, init).then((res) => res.json())
