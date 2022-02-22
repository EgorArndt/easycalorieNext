import React, { FC, ReactNode, CSSProperties, ElementType } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { withStyles, WithStylesProps } from '@hocs'
import { AppTheme } from '../../../styles/theme/models'

export type TypographyProps = {
  children: ReactNode
  weight?: CSSProperties['fontWeight']
  bold?: boolean
  title?: boolean
  subtitle?: boolean
  as?: ElementType
  textAlign?: CSSProperties['textAlign']
}

export type EnhancedTypographyProps = TypographyProps & WithStylesProps

const StyledTypography = styled.span<
  Partial<TypographyProps> & { _title?: boolean }
>`
  word-break: break-word;
  line-height: 150%;
  position: relative;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ _title, theme }) =>
    _title &&
    css`
      font-size: ${(theme as AppTheme).readonly.fontSize('title')};
    `};
  ${({ subtitle, theme }) =>
    subtitle &&
    css`
      font-size: ${(theme as AppTheme).readonly.fontSize('subtitle1')};
      ${(theme as AppTheme).readonly.spacing({ mt: 0.5, mb: 1.5 })}
    `}
  ${({ weight, bold }) =>
    (weight || bold) &&
    css`
      font-weight: ${weight || 'bolder'};
    `};
`

const _Typography: FC<TypographyProps> = ({
  children,
  as,
  title,
  ...props
}: TypographyProps) => (
  <StyledTypography
    as={as ? as : title ? 'h3' : 'span'}
    _title={title}
    {...props}
  >
    {children}
  </StyledTypography>
)

const Typography = withStyles<EnhancedTypographyProps>(_Typography)

export default Typography
