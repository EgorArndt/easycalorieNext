import React from 'react'

import { Typography, Box, BoxProps } from '@ui'
import titlebox from './titlebox.module.scss'

export type TitleboxProps = {
  title: string
  children?: React.ReactNode | React.ReactNode[]
  size?: 'm' | 'l'
} & Partial<BoxProps>

const Titlebox: React.FC<TitleboxProps> = React.memo(
  ({ title, size = 'm', children, ...props }: TitleboxProps) => {
    const isL = size === 'l'

    return (
      <Box column gap={isL ? '3rem' : '1rem'} spacing={{ mt: 1 }} {...props}>
        <Typography
          className={titlebox.title}
          fontSize={isL ? 'header' : 'title'}
          color='primary'
          style={{ letterSpacing: isL ? -3 : -1 }}
        >
          {title}
        </Typography>
        <div className={titlebox.text_container}>{children}</div>
        <style jsx global>{`
          .${titlebox.text_container} > *:only-child {
            text-align: center;
          }
        `}</style>
      </Box>
    )
  }
)

export default Titlebox
