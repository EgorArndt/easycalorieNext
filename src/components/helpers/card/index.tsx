import { FC, ReactNode } from 'react'

import { Box, BoxProps } from '@ui'
import card from './card.module.scss'

type CardProps = {
  header: ReactNode
  body?: ReactNode
  footer?: ReactNode
} & BoxProps

export const Card: FC<CardProps> = ({
  header,
  body,
  footer,
  ...props
}: CardProps) => (
  <Box className={card.card} palette='primary' border {...props}>
    {header}
    {body}
    {footer}
  </Box>
)
