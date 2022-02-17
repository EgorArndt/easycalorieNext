import { FC, ReactNode, CSSProperties } from 'react'

import { withStyles, WithStylesProps  } from '../../hocs/with_styles'

export type UlProps = {
    children: ReactNode | ReactNode[]
    className?: string 
    style?: CSSProperties
}

const _Ul: FC<UlProps> = ({ children, className, style, ...props }: UlProps) => (
    <ul 
        style={{
            display: 'flex', 
            overflow: 'hidden',
            position: 'relative',
            ...style
        }} 
        className={className} 
        {...props}
    >
        {children}
    </ul>
)

export const Ul = withStyles<UlProps & WithStylesProps>(_Ul, null, true)