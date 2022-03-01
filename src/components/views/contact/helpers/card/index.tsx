import { FC, ReactNode } from 'react'

import { Box, Typography, Icon, Link } from '@ui'
import { PaletteProps } from '@theme/models'
import card from './card.module.scss'

type CardProps = {
  header: ReactNode
  title: ReactNode
  text: ReactNode
  linkText: string
  to: string
  palette: keyof PaletteProps
}

const Card: FC<CardProps> = ({
  header,
  title,
  text,
  linkText,
  to,
  palette,
}: CardProps) => (
  <Box className={card.card} palette='primary' border>
    <Box center height={100}>
      <Icon
        palette={palette}
        borrowPaletteFrom='button'
        size={30}
        spacing={{ p: 1 }}
        rounded
      >
        {header}
      </Icon>
    </Box>
    <Typography title color='primary' weight={700} textAlign='center'>
      {title}
    </Typography>
    <Typography fontSize='body1' textAlign='center'>
      {text}
    </Typography>
    <Link
      to={to}
      borrowPaletteFrom='button'
      palette={palette}
      style={{ marginTop: 'auto', border: '1px solid' }}
    >
      {linkText}
    </Link>
  </Box>
)

export default Card
