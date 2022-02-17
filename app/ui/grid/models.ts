import { CSSProperties, ReactNode } from 'react'
import { SpacingShortcuts } from '../../../styles/theme/models'

export type GridCommonProps = {
    itemPlacement?: { x?: CSSProperties['justifyItems'], y?: CSSProperties['alignItems'] }
    itemContentPlacement?: { x?: CSSProperties['justifyContent'], y?: CSSProperties['alignContent'] }
    spacing?: SpacingShortcuts
    childrenSpacing?: SpacingShortcuts
    style?: CSSProperties
    className?: string
    gap?: string | number
    children?: ReactNode | ReactNode[]
}