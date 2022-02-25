/** @jsxImportSource @emotion/react */
import React, {
  useMemo,
  forwardRef,
  ComponentType,
  CSSProperties,
  NamedExoticComponent,
} from 'react'
import { useTheme, css } from '@emotion/react'
import cn from 'classnames'

import {
  AppTheme,
  PaletteProps,
  FontSize,
  SpacingShortcuts,
} from '@theme/models'
import { usePalette } from '@hooks'
import { cssUnitByType } from '@utils'
import { utilityClasses } from '@theme/constants'

export type WithStylesProps = {
  spacing?: SpacingShortcuts | false
  childrenSpacing?: SpacingShortcuts | false
  fontSize?: FontSize | false
  palette?: keyof PaletteProps | false
  color?:
    | keyof AppTheme['mutatable']['textColors']
    | keyof AppTheme['readonly']['commonColors']
    | false
  border?: boolean
  borderTop?: boolean
  borderBottom?: boolean
  borderLeft?: boolean
  borderRight?: boolean
  borrowPaletteFrom?: keyof AppTheme['mutatable']['ui'] | null | false

  fullSize?: boolean
  height?: string | number
  width?: string | number
  gap?: string | number
  wrap?: boolean
  noWrap?: boolean
  column?: boolean
  center?: boolean
  align?:
    | [
        CSSProperties['justifyContent'] | null,
        CSSProperties['alignItems'] | null
      ]
    | CSSProperties['justifyContent']
    | string
} & { className?: string; style?: CSSProperties | Record<string, unknown> }

const withStyles = <P extends WithStylesProps>(
  Component: ComponentType<P> | NamedExoticComponent,
  initialKey?: keyof AppTheme['mutatable']['ui'] | null,
  isWrapper?: boolean
) => {
  const StyledComponent = forwardRef(
    (
      {
        palette,
        borrowPaletteFrom,
        color,
        className,
        childrenSpacing,
        spacing: _spacing,
        fontSize: _fontSize,
        border: _border,
        borderTop,
        borderBottom,
        borderLeft,
        borderRight,

        fullSize,
        height,
        width,
        gap,
        wrap,
        noWrap,
        column,
        center,
        align,
        ...ownProps
      }: P,
      ref
    ) => {
      const {
        mutatable: { textColors, border },
        readonly: { commonColors, spacing, fontSize },
      } = useTheme() as AppTheme

      const { bg, contrastText, bgOnHover, textOnHover } = usePalette(
        palette,
        borrowPaletteFrom || initialKey
      )

      const important = ' !important'
      const { inherits_palette, active } = utilityClasses

      const styles = useMemo(() => {
        return css`
          ${(height || fullSize) &&
          'height:' + (fullSize ? '100%' : cssUnitByType(height))};
          ${(width || fullSize) &&
          'width:' + (fullSize ? '100%' : cssUnitByType(width))};
          ${gap && 'gap:' + cssUnitByType(gap)};
          ${wrap && 'flex-wrap: wrap'};
          ${noWrap && 'white-space: nowrap'};
          ${column && 'flex-direction: column'};
          ${column && (align || center)
            ? `
                    ${
                      typeof align === 'string'
                        ? (align === 'left'
                            ? 'align-items: start'
                            : align === 'right'
                            ? 'align-items: end'
                            : `justify-content: ${align}`) + ' !important;'
                        : `justify-content: ${
                            (center ? 'center' : align && align[0]) +
                            ' !important;'
                          } align-items: ${
                            (center ? 'center' : align && align[1]) +
                            ' !important'
                          };`
                    }
                `
            : align || center
            ? `
                    ${
                      typeof align === 'string'
                        ? `justify-content: ${
                            (center ? 'center' : align) + ' !important'
                          };`
                        : `justify-content: ${
                            (center ? 'center' : align && align[0]) +
                            ' !important;'
                          } align-items: ${
                            (center ? 'center' : align && align[1]) +
                            ' !important'
                          };`
                    }
                `
            : null}
          ${bg && `background-color: ${bg} ${important};`}
                ${(color || contrastText) &&
          `color: ${
            color
              ? textColors[
                  color as keyof AppTheme['mutatable']['textColors']
                ] ||
                commonColors[
                  color as keyof AppTheme['readonly']['commonColors']
                ].bg
              : contrastText
          } ${important};`}
                ${_fontSize && `font-size: ${fontSize(_fontSize)};`}
                ${_border && `border: 1px solid ${border};`}
                ${borderTop && `border-top: 1px solid ${border};`}
                ${borderBottom && `border-bottom: 1px solid ${border};`}
                ${borderLeft && `border-left: 1px solid ${border};`}
                ${borderRight && `border-right: 1px solid ${border};`}
            
                ${_spacing ? spacing(_spacing) : null}
                
                ${childrenSpacing &&
          css`
            & > * {
              ${spacing(childrenSpacing)}
            }
          `}

                ${!isWrapper
            ? css`
                ${(bgOnHover || textOnHover) &&
                css`
                  &:hover {
                    background-color: ${bgOnHover && bgOnHover + important};
                    color: ${textOnHover && textOnHover + important};
                  }
                  &.${active} {
                    background-color: ${bgOnHover && bgOnHover + important};
                    color: ${textOnHover && textOnHover + important};
                  }
                `}
              `
            : (bgOnHover || textOnHover) &&
              css`
                && {
                  & *.${inherits_palette} {
                    background-color: inherit ${important};
                    color: inherit ${important};
                  }
                  & *.${inherits_palette}:hover {
                    background-color: ${bgOnHover && bgOnHover + important};
                    color: ${textOnHover && textOnHover + important};
                  }
                  & *.${active}.${inherits_palette} {
                    background-color: ${bgOnHover && bgOnHover + important};
                    color: ${textOnHover && textOnHover + important};
                  }
                }
              `}
                ${palette === 'disabled' && 'cursor: not-allowed;'}
        `
      }, [
        fullSize,
        height,
        width,
        gap,
        wrap,
        noWrap,
        column,
        center,
        align,
        bg,
        bgOnHover,
        border,
        childrenSpacing,
        color,
        contrastText,
        fontSize,
        spacing,
        textOnHover,
        textColors,
        _border,
        borderTop,
        borderBottom,
        borderLeft,
        borderRight,
        inherits_palette,
        active,
      ])

      return (
        //@ts-ignore
        <Component
          css={styles}
          className={cn(className, {
            inherits_palette: palette === 'inherit' && !isWrapper,
          })}
          palette={palette}
          componentRef={ref}
          {...ownProps}
        />
      )
    }
  )

  StyledComponent.displayName = `Styled${Component.name}_from_withStyles`
  return React.memo(StyledComponent)
}

export default withStyles
