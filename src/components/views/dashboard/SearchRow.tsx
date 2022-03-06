import { FC } from 'react'

import { GridRow, Input, Box, Button } from '@ui'
import { Search, Plus } from '@icons'
import { useBreakpoints } from '@hooks'
import createMeal from 'components/modal/create_meal'

const SearchRow: FC = () => {
  const { isXs, isS, isM } = useBreakpoints()
  const isMobile = isXs || isS || isM

  return (
    <GridRow
      width='100%'
      rowItemSizes={[15, 8]}
      fontSize='body1'
      wrap
      gap='1rem'
    >
      <Input before={<Search />} size='s' placeholder='Search...' disabled />
      <Box width='100%' gap='1rem'>
        {!isMobile && (
          <Button
            palette='inherit'
            variant='ghost'
            size='s'
            border
            width='100%'
            onClick={() => createMeal()}
          >
            Create a meal
          </Button>
        )}
        <Button
          palette='primary'
          size='s'
          before={<Plus />}
          iSize={13}
          width='100%'
        >
          Create a plan
        </Button>
      </Box>
    </GridRow>
  )
}

export default SearchRow
