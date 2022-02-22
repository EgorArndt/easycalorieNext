import React, { FC } from 'react'
import { css } from '@emotion/react'

import { Typography, Box, BoxProps } from '@ui'
import titlebox from './titlebox.module.scss'

export type TitleboxProps = {
  title: string
  children?: React.ReactNode | React.ReactNode[]
  size?: 'm' | 'l'
} & Partial<BoxProps>

export const Titlebox: FC<TitleboxProps> = ({
  title,
  size = 'm',
  children,
  ...props
}: TitleboxProps) => {
  const isL = size === 'l'

  return (
    <Box column gap={isL ? '3rem' : '1rem'} {...props}>
      <Typography
        className={titlebox.title}
        fontSize={isL ? 'header' : 'title'}
        color='primary'
        css={css`
          letter-spacing: ${isL ? -3 : -1}px;
        `}
      >
        {title}
      </Typography>
      <div
        className={titlebox.text_container}
        css={css`
          ${isL && `& > *:only-child {text-align: center;}`}
        `}
      >
        {children}
      </div>
    </Box>
  )
}
