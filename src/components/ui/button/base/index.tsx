import { FC, ReactNode, RefObject } from 'react'
import cn from 'classnames'

import { StyledBase } from './styles'
import { useBreakpoints, usePalette } from '@hooks'
import { PaletteProps, AppTheme } from '@theme/models'
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
  uiKey?: keyof AppTheme['mutatable']['ui']
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
  size,
  sizeXs,
  sizeS,
  sizeM,
  sizeL,
  unresponsiveSize,
  uiKey,
  ...props
}: ButtonBaseProps) => {
  const _variant = variant ? variant : palette ? 'contained' : 'ghost'
  const colorsOnActive = paletteOnActive && usePalette(paletteOnActive)
  const themedStyles = usePalette(palette, uiKey)
  const { isXs, isS, isM } = useBreakpoints()
  const defaultSize = 'm'
  const mobileSize = 's'
  const desktopSize = defaultSize

  const setSize = (size: ResponsiveSize | undefined) =>
    unresponsiveSize
      ? size || defaultSize
      : size
      ? size
      : _variant !== 'ghost' && (isXs
      ? sizeXs || mobileSize
      : isS
      ? sizeS || mobileSize
      : isM
      ? sizeM || desktopSize
      : desktopSize)

  return (
    <StyledBase
      className={cn(
        {
          'btn-outlined': _variant === 'outlined',
          'btn-contained': _variant === 'contained',
          'btn-contained-reversed': _variant === 'contained-reversed',
          'btn-ghost': _variant === 'ghost',
          'btn-small': setSize(size) === 's',
          'btn-medium': setSize(size) === 'm',
          'btn-large': setSize(size) === 'l',
        },
        className
      )}
      variant={_variant}
      themedStyles={themedStyles}
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
