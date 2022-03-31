import { get } from 'lodash-es'

import { filterBySearchTerm, filterByDate } from '@utils'
import type { UnknownObject } from 'models/common'

export enum FILTER_IDS {
  searchTerm = 'searchTerm',
  searchBy = 'searchBy',
  type = 'type',
  date = 'date',
}

const searchBy =
  (by: string) =>
  <T extends UnknownObject>(searchTerm: string, items: T[]) =>
    filterBySearchTerm<T>(searchTerm, by, items)
const byType = <T>(items: T[]) => items
const byDate =
  (order: 'asc' | 'des') =>
  <T extends UnknownObject>(items: T[]) =>
    filterByDate<T>(order, 'createdAt', items)

export const FILTER_MAP = {
  [FILTER_IDS.searchBy]: {
    name: searchBy('name'),
    author: searchBy('author'),
    date: searchBy('createdAt'),
  },
  [FILTER_IDS.type]: {
    all: byType,
    meal: byType,
    plan: byType,
  },
  [FILTER_IDS.date]: {
    ascending: byDate('asc'),
    descending: byDate('des'),
  },
}

export const filterById = (id: string, key: string, ...args: unknown[]) =>
  get(FILTER_MAP, `${id}.${key}`)(...args)

export const FILTERS = [
  {
    id: FILTER_IDS.searchTerm,
    label: '',
    defaultValue: '',
    options: [],
  },
  {
    id: FILTER_IDS.searchBy,
    label: 'Search by:',
    defaultValue: Object.keys(FILTER_MAP[FILTER_IDS.searchBy])[0],
    options: Object.keys(FILTER_MAP[FILTER_IDS.searchBy]),
  },
  {
    id: FILTER_IDS.date,
    label: 'Date:',
    defaultValue: Object.keys(FILTER_MAP[FILTER_IDS.date])[0],
    options: Object.keys(FILTER_MAP[FILTER_IDS.date]),
  },
  {
    id: FILTER_IDS.type,
    label: 'Type:',
    defaultValue: Object.keys(FILTER_MAP[FILTER_IDS.type])[0],
    options: Object.keys(FILTER_MAP[FILTER_IDS.type]),
  },
]
