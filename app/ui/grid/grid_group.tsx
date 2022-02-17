import { FC } from 'react'
import styled from '@emotion/styled'
import { get } from 'lodash-es'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'
import { GridCommonProps } from './models'
import { cssUnitByType } from '../../utils'

type Unit = string | number

export type GridGroupProps = {
    cols?: number
    fill?: boolean
    itemSize?: Unit | { min: Unit, max?: Unit }
    maxItemHeight?: Unit
} & GridCommonProps

const GridContainer = styled.div<Partial<GridGroupProps>>`
    display: grid;
    grid-template-columns: ${({ cols, fill = false, itemSize = '1fr'}) => 
        `repeat(
            ${cols ? cols : fill ? 'auto-fill' : 'auto-fit'}, 
            ${cssUnitByType(itemSize, `minmax(${cssUnitByType(get(itemSize, 'min', 100))}, ${cssUnitByType(get(itemSize, 'max', '1fr'))})`)}
        )`
    };    
    ${({ itemPlacement }) => itemPlacement && `place-items: ${itemPlacement.y} ${itemPlacement.x};`}
    ${({ itemContentPlacement }) => itemContentPlacement && `place-content: ${itemContentPlacement.y} ${itemContentPlacement.x};`}

    ${({ maxItemHeight }) => maxItemHeight && `
        & > * {
            max-height: ${cssUnitByType(maxItemHeight)};
        }
    `}
`

const _GridGroup: FC<GridGroupProps> = ({ children, className, ...props }: GridGroupProps) => (
    <GridContainer className={className} {...props}>
        {children}
    </GridContainer>  
)

const GridGroup = withStyles<GridGroupProps & WithStylesProps>(_GridGroup, null, true)

export default GridGroup