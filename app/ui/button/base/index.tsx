import { FC, ReactNode, RefObject } from 'react'
import cn from 'classnames'

import { StyledCore } from './styles'
import { usePalette } from '../../../hooks'
import { PaletteProps } from 'styles/theme/models'

export type ButtonBaseProps = {
    children?: ReactNode
    variant?: 'default' | 'outlined' | 'contained' | 'bgless' | 'contained-reversed' 
    iSize?: number
    iClass?: string
    before?: ReactNode
    after?: ReactNode
    className?: string 
    palette?: keyof PaletteProps | false
    paletteOnActive?: keyof PaletteProps | false
    componentRef?: RefObject<HTMLButtonElement>
    [key: string]: unknown
}

export const ButtonBase: FC<ButtonBaseProps> = ({ 
    children, 
    before, 
    after, 
    iClass,
    variant,
    className, 
    palette,
    paletteOnActive,
    componentRef,
    ...props 
}: ButtonBaseProps) => {
    const _variant = variant ? variant : palette ? 'contained' : 'default'
    const stylesOnActive = paletteOnActive && usePalette(paletteOnActive)
    const derivedStyles = _variant === 'contained-reversed' && usePalette(palette, 'link')
    
    return (
        <StyledCore
            className={cn(            
                {
                    'btn-outlined': _variant === 'outlined',
                    'btn-contained': _variant === 'contained',
                    'btn-contained-reversed': _variant === 'contained-reversed',
                    'btn-bgless': _variant === 'bgless',
                    'btn-default': _variant === 'default' 
                },
                className
            )} 
            variant={_variant}
            derivedStyles={derivedStyles}
            _onActive={stylesOnActive}
            ref={componentRef}
            {...props}
        >
            {before && <span className={cn('button-icon', 'before', iClass)}>{before}</span>}
                {children}
            {after && <span className={cn('button-icon', 'after', iClass)}>{after}</span>}
        </StyledCore>
    )    
}

