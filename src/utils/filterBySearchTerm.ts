import { UnknownObject } from 'models/common'

export default <T extends UnknownObject>(
  searchTerm: string,
  accessor: keyof T,
  items: Array<T>
) =>
  items.filter((i) =>
    (i[accessor] as string)
      .trim()
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  )
