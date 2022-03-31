import { FC, ReactNode } from 'react'

import { Box, BoxProps } from '@ui'
import styles from './card.module.scss'

type CardProps = {
  header: ReactNode
  body?: ReactNode
  footer?: ReactNode
} & BoxProps

const Card: FC<CardProps> = ({ header, body, footer, ...props }: CardProps) => (
  <Box className={styles.card} palette='primary' border {...props}>
    {header}
    {body}
    {footer}
  </Box>
)

export default Card
