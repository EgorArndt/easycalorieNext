import { FC } from 'react'
import { useTheme } from '@emotion/react'

import Card from '@views/contact/helpers/card'
import { Box, Typography, GridGroup } from '@ui'
import { Support, Sales, Partners, Paper } from '@icons'
import { AppTheme, PaletteProps } from '@theme/models'
import { mainInlineSpacing } from '@layouts/constants'
import styles from './hero.module.scss'

const ContactHero: FC = () => {
  const {
    mutatable: {
      appLayout: { hero },
    },
  } = useTheme() as AppTheme
  const cards = [
    {
      i: <Support />,
      title: 'Support',
      txt: 'We’re here to help with any EasyCalorie related questions.',
      linkText: 'Get support',
      to: '/23',
      palette: 'info',
    },
    {
      i: <Sales />,
      title: 'Sales',
      txt: 'We’d love to talk about how we can work together.',
      linkText: 'Contact sales',
      to: '/23',
      palette: 'purple',
    },
    {
      i: <Partners />,
      title: 'Partners',
      txt: 'Join our partner ecosystem and accelerate your business with EasyCalorie.',
      linkText: 'Become a partner',
      to: '/23',
      palette: 'pink',
    },
    {
      i: <Paper />,
      title: 'Docs',
      txt: 'Learn more about how EasyCalorie makes your cooking flow easier.',
      linkText: 'Visit docs',
      to: '/23',
      palette: 'primary',
    },
  ]

  const heroStyles = {
    backgroundImage: hero.bg,
    color: hero.contrastText,
    paddingInline: mainInlineSpacing,
  }

  return (
    <Box className={styles.hero} style={heroStyles}>
      <Typography
        fontSize='header'
        textAlign='center'
        weight={700}
        color='primary'
        spacing={{ px: 1 }}
        style={{ letterSpacing: '-.049375rem' }}
      >
        Our teams are here to help
      </Typography>
      <Typography
        fontSize='title'
        textAlign='center'
        spacing={{ mt: 2, mb: 4 }}
      >
        Get in touch and let us know how we can help.
      </Typography>
      <GridGroup gap='2rem' itemSize={{ min: 200 }} center width='90%'>
        {cards.map(({ i, title, txt, linkText, to, palette }) => (
          <Card
            key={txt}
            header={i}
            title={title}
            text={txt}
            linkText={linkText}
            to={to}
            palette={palette as keyof PaletteProps}
          />
        ))}
      </GridGroup>
    </Box>
  )
}

export default ContactHero
