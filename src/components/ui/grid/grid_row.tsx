import React, { FC, ReactNode, RefObject } from 'react'
import { css } from '@emotion/react'

import { Box, BoxProps } from '@ui'
import { withStyles, WithStylesProps } from '@hocs'
import { cssUnitByType } from '@utils'

type GridRowProps = {
  rowItemSizes: Array<number>
  columnsInRow?: number
  minWidth?: number | string
  children: ReactNode | ReactNode[]
  className?: string
  componentRef?: RefObject<HTMLDivElement>
} & BoxProps

export type EnhancedGridRowProps = GridRowProps & WithStylesProps

const _GridRow: FC<GridRowProps> = ({
  children,
  rowItemSizes,
  minWidth,
  columnsInRow = 24,
  componentRef,
  ...props
}: GridRowProps) => (
  <Box ref={componentRef} {...props}>
    {React.Children.map(children, (child, index) => {
      let flexBasis
      if (rowItemSizes && rowItemSizes[index] > 0) {
        flexBasis = `calc(100% / ${columnsInRow} * ${rowItemSizes[index]})`
      }
      return (
        <Box
          css={css`
            flex-basis: ${flexBasis};
            min-width: ${minWidth && cssUnitByType(minWidth)};
          `}
        >
          {child}
        </Box>
      )
    })}
  </Box>
)

const GridRow = withStyles<EnhancedGridRowProps>(_GridRow, null, true)

export default GridRow
