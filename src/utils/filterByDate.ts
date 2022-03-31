import { compareDesc, compareAsc, parseISO } from 'date-fns'

import { UnknownObject } from 'models/common'

export default <T extends UnknownObject>(
  order: 'des' | 'asc',
  accessor: keyof T,
  items: T[]
) => {
  if (order === 'des')
    return items.sort((a, b) =>
      compareDesc(
        parseISO(a[accessor] as string),
        parseISO(b[accessor] as string)
      )
    )
  return items.sort((a, b) =>
    compareAsc(parseISO(a[accessor] as string), parseISO(b[accessor] as string))
  )
}
