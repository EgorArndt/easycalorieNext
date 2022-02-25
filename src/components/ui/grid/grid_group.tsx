import { FC } from 'react'
import styled from '@emotion/styled'
import { get } from 'lodash-es'

import { withStyles, WithStylesProps } from '@hocs'
import { GridCommonProps } from './models'
import { cssUnitByType } from '@utils'

type Unit = string | number

export type GridGroupProps = {
  cols?: number
  fill?: boolean
  itemSize?: Unit | { min: Unit; max?: Unit }
  maxItemHeight?: Unit
} & GridCommonProps

export type EnhancedGridGroupProps = GridGroupProps & WithStylesProps

const GridContainer = styled.div<Partial<GridGroupProps>>`
  display: grid;
  grid-template-columns: ${({ cols, fill, itemSize = '1fr' }) =>
    `repeat(
            ${cols ? cols : fill ? 'auto-fill' : 'auto-fit'}, 
            ${cssUnitByType(
              itemSize,
              `minmax(${cssUnitByType(
                get(itemSize, 'min', 100)
              )}, ${cssUnitByType(get(itemSize, 'max', '1fr'))})`
            )}
        )`};

  ${({ maxItemHeight }) =>
    maxItemHeight &&
    `
        & > * {
            max-height: ${cssUnitByType(maxItemHeight)};
        }
    `}
`

const _GridGroup: FC<GridGroupProps> = ({
  children,
  ...props
}: GridGroupProps) => <GridContainer {...props}>{children}</GridContainer>

const GridGroup = withStyles<EnhancedGridGroupProps>(_GridGroup, null, true)

export default GridGroup
