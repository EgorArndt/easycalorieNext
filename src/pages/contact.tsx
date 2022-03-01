import { useTheme } from '@emotion/react'

import type { Page } from 'next/app'
import HomeLayout from '@layouts/crafted/HomeLayout'
import { headerHeight } from '@layouts/constants'
import { Box, Typography, GridGroup, Link } from '@ui'
import { Support, Sales, Partners, Docs } from '@icons'
import { AppTheme } from '@theme/models'
import { useBreakpoints } from '@hooks'

const Contact: Page = () => {
  const {
    mutatable: {
      appLayout: { hero },
    },
  } = useTheme() as AppTheme
  const { isS, isXs } = useBreakpoints()
  const isMobileSize = isS || isXs
  const cards = [
    {
      i: <Support />,
      title: 'Support',
      txt: 'We’re here to help with any EasyCalorie related questions.',
      link: 'Get support',
      to: '/23',
    },
    {
      i: <Sales />,
      title: 'Sales',
      txt: 'We’d love to talk about how we can work together.',
      link: 'Contact sales',
      to: '/23',
    },
    {
      i: <Partners />,
      title: 'Partners',
      txt: 'Join our partner ecosystem and accelerate your business with EasyCalorie.',
      link: 'Become a partner',
      to: '/23',
    },
    {
      i: <Docs />,
      title: 'Docs',
      txt: 'Learn more about how EasyCalorie makes your cooking flow easier.',
      link: 'Visit docs',
      to: '/23',
    },
  ]

  const heroStyles = {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: hero.bg,
    color: hero.contrastText,
    minHeight: isMobileSize ? 'auto' : `calc(100vh - ${headerHeight})`,
    paddingBlock: '7rem',
  }

  const cardStyles = {
    minHeight: 350,
    boxShadow: '0 5px 10px rgba(0,0,0,0.12)',
    gap: '1rem',
    padding: '1rem',
    flex: 1,
    flexDirection: 'column',
  }

  return (
    <Box style={heroStyles}>
      <Typography
        fontSize='header'
        textAlign='center'
        weight={700}
        color='primary'
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
        {cards.map(({ i, title, txt, link, to }) => (
          <Box key={txt} palette='primary' border style={cardStyles}>
            <Box center height={100}>
              <Typography
                palette='info'
                height={80}
                width={80}
                center
                style={{ display: 'flex', borderRadius: '50%' }}
              >
                {i}
              </Typography>
            </Box>
            <Typography title color='primary' weight={700} textAlign='center'>
              {title}
            </Typography>
            <Typography fontSize='body1' textAlign='center'>
              {txt}
            </Typography>
            <Link
              to={to}
              borrowPaletteFrom='button'
              palette='primary'
              style={{ marginTop: 'auto', border: '1px solid' }}
            >
              {link}
            </Link>
          </Box>
        ))}
      </GridGroup>
    </Box>
  )
}

Contact.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default Contact
