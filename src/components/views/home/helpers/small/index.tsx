import { FC } from 'react'

import { Typography, TypographyProps } from '@ui'
import s from './small.module.scss'

export const Small: FC<TypographyProps> = ({ children, ...props }) => (
  <Typography className={s.small} as='small' color='primary' {...props}>
    {children}
  </Typography>
)
