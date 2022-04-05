import { useState, FC, ReactNode, ReactElement } from 'react'
import { useRouter } from 'next/router'

import { AppContainer } from '@layouts/base'
import { Box, GridGroup, GridRow, BoxProps, Button } from '@ui'
import { Titlebox, SearchInput, Filter } from 'components/helpers'
import Item from './Item'
import ItemSkeleton from './ItemSkeleton'
import { Sad, TrashBucket } from '@icons'
import { useApi, useFilters, useBreakpoints } from '@hooks'
import { FILTERS, FILTER_IDS, filterById } from '@views/dashboard/constants'
import type { Meal } from '@lib/models'

export type DashboardSectionProps = {
  children?: ReactNode
  title?: string
  text?: string
  Fallback: ReactElement
  filterIds?: Array<keyof typeof FILTER_IDS>
  url: string
} & BoxProps

const DashboardSection: FC<DashboardSectionProps> = ({
  children,
  title,
  text,
  filterIds = [],
  Fallback,
  url,
  ...props
}: DashboardSectionProps) => {
  const { data, loading } = useApi<Meal[]>({url})
  const { filters, setFilter, forEachFilter, resetFilters } =
    useFilters(FILTERS)
  const [isTyping, setIsTyping] = useState(false)
  const { isXs, isS } = useBreakpoints()
  const isMobile = isXs || isS

  const applyFilters = (data: Meal[]) => {
    let filteredData = data
    forEachFilter((id, val) => {
      if (id === FILTER_IDS.searchBy) {
        if (filters.searchTerm === '') return
        filteredData = filterById(id, val, filters.searchTerm, filteredData)
      } else if (id !== FILTER_IDS.searchTerm) {
        filteredData = filterById(id, val, filteredData)
      }
    })
    if (filteredData.length) return mapDataToItems(filteredData)
    return (
      <span>
        This search yielded no results <Sad />
      </span>
    )
  }

  const mapDataToItems = (data: Meal[]) =>
    data.map((i) => (
      <Item
        key={i.name}
        name={i.name}
        labels={i.labels}
        comment={i.comment}
        date={i.createdAt}
      />
    ))

  return (
    <Box as='section' borderTop spacing={{ py: 1 }} width='100%' {...props}>
      <AppContainer width='100%' column childrenSpacing={{ my: 1 }}>
        {title && (
          <Titlebox title={title} align='left' fontSize='body1'>
            {text}
          </Titlebox>
        )}
        <GridRow
          width='100%'
          rowItemSizes={[15, 8]}
          fontSize='body1'
          wrap
          gap='1rem'
          itemMinWidth={isMobile && '100%'}
          spacing={{ mb: 0 }}
        >
          <SearchInput
            disabled={!Boolean(data?.length)}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            setSearchTerm={(value) => setFilter('searchTerm', value)}
            searchTerm={filters.searchTerm}
          />
          {children}
        </GridRow>
        <Box
          gap='0.5rem'
          width='100%'
          fontSize='body1'
          spacing={{ mt: 0.5 }}
          wrap
        >
          {FILTERS.map(
            (filter) =>
              ['searchBy', ...filterIds].includes(filter.id) && (
                <Filter
                  key={filter.id}
                  disabled={isTyping}
                  label={filter.label}
                  options={filter.options}
                  cb={(value) => setFilter(filter.id, value)}
                  curVal={filters[filter.id]}
                />
              )
          )}
          <Button
            palette='inherit'
            variant='ghost'
            before={<TrashBucket />}
            onClick={resetFilters}
          >
            Reset filters
          </Button>
        </Box>
        {loading || Boolean(data?.length) ? 
          <GridGroup itemSize={{ min: 300, max: !isMobile && 350 }} gap='1rem'>
            {loading || isTyping ? <ItemSkeleton /> : applyFilters(data)}
            {/* <ItemSkeleton /> */}
          </GridGroup>
        : 
          Fallback
        } 
      </AppContainer>
    </Box>
  )
}

export default DashboardSection
