import { FC, ReactNode, RefObject, CSSProperties } from 'react'
import cn from 'classnames'

import { StyledBase, Additional } from './styles'
import { useBreakpoints, usePalette } from '@hooks'
import { Icon } from '@ui'
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
  classOnActive?: string | false
  styleOnActive?: CSSProperties | false
  paletteOnActive?: keyof PaletteProps | false
  variantOnActive?:
    | 'ghost'
    | 'outlined'
    | 'contained'
    | 'contained-reversed'
    | false
  componentRef?: RefObject<HTMLButtonElement>
  uiKey?: keyof AppTheme['mutatable']['ui']
  style?: CSSProperties | false
  [key: string]: unknown
} & Additional

export const ButtonBase: FC<ButtonBaseProps> = ({
  children,
  before,
  after,
  iClass,
  iSize,
  variant,
  className,
  palette,
  componentRef,
  size,
  sizeXs,
  sizeS,
  sizeM,
  sizeL,
  unresponsiveSize,
  uiKey,
  paletteOnActive,
  colorOnActive,
  classOnActive,
  styleOnActive,
  variantOnActive,
  style,
  ...props
}: ButtonBaseProps) => {
  const _variant = variantOnActive
    ? variantOnActive
    : variant
    ? variant
    : palette
    ? 'contained'
    : 'ghost'
  const getPaletteOnActive = paletteOnActive && usePalette(paletteOnActive)
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
      : _variant !== 'ghost' &&
        (isXs
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
        className,
        classOnActive
      )}
      variant={_variant}
      themedStyles={themedStyles}
      _paletteOnActive={getPaletteOnActive}
      ref={componentRef}
      style={{ ...style, ...styleOnActive }}
      {...props}
    >
      {before && (
        <Icon i={before} size={iSize} className={cn('before', iClass)} />
      )}
      {children}
      {after && <Icon i={after} size={iSize} className={cn('after', iClass)} />}
    </StyledBase>
  )
}
