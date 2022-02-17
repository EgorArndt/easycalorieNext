import React, { FC, ReactNode } from 'react'
import { css } from '@emotion/react'

import Box from '../box'
import { withStyles, WithStylesProps } from '../../hocs/with_styles'
import { cssUnitByType } from '../../utils/index'

type GridRowProps = {
  rowItemSizes: Array<number>
  columnsInRow?: number
  minWidth?: number | string
  children: ReactNode | ReactNode[]
  className?: string
}

const _GridRow: FC<GridRowProps> = ({ children, rowItemSizes, className, minWidth, columnsInRow = 24, ...props }: GridRowProps) => (
  <Box className={className} {...props}>
    {React.Children.map(children, (child, index) => {
      let flexBasis
      if (rowItemSizes && rowItemSizes[index] > 0) {
        flexBasis = `calc(100% / ${columnsInRow} * ${rowItemSizes[index]})`
      }
      return <Box css={css`flex-basis: ${flexBasis}; min-width: ${minWidth && cssUnitByType(minWidth)};`}> {child} </Box>
    })}
  </Box>
)

const GridRow = withStyles<GridRowProps & WithStylesProps>(_GridRow, null, true)

export default GridRow