import { useState, useEffect, useCallback, useRef } from 'react'
import { isEmpty, forIn } from 'lodash-es'

export type Filter = {
  defaultValue: string
  id: string
  label?: string
  options: string[]
}

export type FinalFilters = {
  [key: Filter['id']]: string
}

export default (filters: Array<Filter>) => {
  const [_filters, _setFilters] = useState({} as FinalFilters)
  const defaultFiltersRef = useRef({})

  const setFilter = (id: keyof FinalFilters, value: string) =>
    _setFilters({ ..._filters, [id]: value })

  const resetFilters = useCallback(() => {
    filters.forEach(
      ({ id, defaultValue }) =>
        (defaultFiltersRef.current = {
          ...defaultFiltersRef.current,
          [id]: defaultValue,
        })
    )
    _setFilters(defaultFiltersRef.current)
  }, [])

  const forEachFilter = (
    cb: (filterId: Filter['id'], val: string) => unknown
  ) =>
    forIn(_filters, (val, filterId) =>
      isEmpty(val) ? null : cb(filterId, val)
    )

  useEffect(() => resetFilters(), [])

  return {
      filters: _filters,
      setFilter,
      resetFilters,
      forEachFilter,
    }
}
