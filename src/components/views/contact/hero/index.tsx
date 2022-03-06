import { FC } from 'react'
import { useTheme } from '@emotion/react'

import { Link, Box, Typography, GridGroup, Icon } from '@ui'
import { AppTheme, PaletteProps } from '@theme/models'
import { mainInlineSpacing } from '@layouts/constants'
import { Card } from 'components/helpers/card'
import { cards } from './constants'

const ContactHero: FC = () => {
  const {
    mutatable: {
      appLayout: { hero },
    },
  } = useTheme() as AppTheme

  const heroStyles = {
    backgroundImage: hero.bg,
    color: hero.contrastText,
    paddingInline: mainInlineSpacing,
  }

  return (
    <Box column center spacing={{ py: 7 }} style={heroStyles}>
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
            style={{ minHeight: '22em', flex: 1 }}
            gap='1rem'
            header={
              <Box center height={100}>
                <Icon
                  i={i}
                  palette={palette as keyof PaletteProps}
                  borrowPaletteFrom='button'
                  size={30}
                  spacing={{ p: 1 }}
                  rounded
                />
              </Box>
            }
            body={
              <>
                <Typography
                  title
                  color='primary'
                  weight={700}
                  textAlign='center'
                >
                  {title}
                </Typography>
                <Typography fontSize='body1' textAlign='center'>
                  {txt}
                </Typography>
              </>
            }
            footer={
              <Link
                to={to}
                borrowPaletteFrom='button'
                palette={palette}
                style={{ marginTop: 'auto', border: '1px solid' }}
              >
                {linkText}
              </Link>
            }
          />
        ))}
      </GridGroup>
    </Box>
  )
}

export default ContactHero
