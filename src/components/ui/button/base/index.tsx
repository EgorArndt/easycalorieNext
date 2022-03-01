import { FC, ReactNode, RefObject } from 'react'
import cn from 'classnames'

import { StyledBase } from './styles'
import { useBreakpoints, usePalette } from '@hooks'
import { PaletteProps } from 'styles/theme/models'
import { ResponsiveSize } from '../../models'

export type ButtonBaseProps = {
  children?: ReactNode
  variant?: 'ghost' | 'outlined' | 'contained' | 'contained-reversed'
  size?: ResponsiveSize
  sizeXs?: ResponsiveSize
  sizeS?: ResponsiveSize
  sizeM?: ResponsiveSize
  sizeL?: ResponsiveSize
  unresponsiveSize?: boolean
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
  size = 'm',
  sizeXs = 's',
  sizeS = 's',
  sizeM = size,
  sizeL = size,
  unresponsiveSize,
  ...props
}: ButtonBaseProps) => {
  const _variant = variant ? variant : palette ? 'contained' : 'ghost'
  const colorsOnActive = paletteOnActive && usePalette(paletteOnActive)
  const colorsToReverse =
    _variant === 'contained-reversed' && usePalette(palette, 'link')
  const { isXs, isS, isM } = useBreakpoints()
  const _size = unresponsiveSize
    ? size
    : isXs
    ? sizeXs
    : isS
    ? sizeS
    : isM
    ? sizeM
    : sizeL

  return (
    <StyledBase
      className={cn(
        {
          'btn-outlined': _variant === 'outlined',
          'btn-contained': _variant === 'contained',
          'btn-contained-reversed': _variant === 'contained-reversed',
          'btn-ghost': _variant === 'ghost',
          'btn-small': _size === 's' && _variant !== 'ghost',
          'btn-medium': _size === 'm' && _variant !== 'ghost',
          'btn-large': _size === 'l' && _variant !== 'ghost',
        },
        className
      )}
      variant={_variant}
      colorsToReverse={colorsToReverse}
      _onActive={colorsOnActive}
      ref={componentRef}
      {...props}
    >
      {before && (
        <span className={cn('button-icon', 'before', iClass)}>{before}</span>
      )}
      {children}
      {after && (
        <span className={cn('button-icon', 'after', iClass)}>{after}</span>
      )}
    </StyledBase>
  )
}
