import { AppFooter } from 'components/layouts/footers'
import { Typography, Box, Link } from '@ui'
import Logo from 'components/layouts/logo'
import { Github, Twitter } from '@icons'

const HomeFooter = () => {
  const items =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiasodit!'
      .split(' ')
      .map((str) => (
        <Link
          key={str}
          to={str}
          align='left'
          palette='inherit'
          variant='bgless'
        >
          {str}
        </Link>
      ))

  const cols = [
    {
      header: (
        <Typography bold color='primary'>
          About this app
        </Typography>
      ),
      items,
    },
    {
      header: (
        <Typography bold color='primary'>
          If you wish to support us😍
        </Typography>
      ),
      items,
    },
    {
      header: (
        <Typography bold color='primary'>
          About the author
        </Typography>
      ),
      items,
    },
    {
      header: (
        <Typography bold color='primary'>
          Legal
        </Typography>
      ),
      items,
    },
  ]

  return (
    <AppFooter cols={cols}>
      <Box gap='1rem' column align='left'>
        <Logo />
        <span>Copyright © 2022 Easycalorie Inc. All rights reserved.</span>
      </Box>
      <Box gap='2rem'>
        {[<Github />, <Twitter />].map((i, idx) => (
          <Link
            key={idx}
            passHref
            to='https://github.com/EgorArndt'
            before={i}
            iSize={30}
            palette='inherit'
            variant='bgless'
          />
        ))}
      </Box>
    </AppFooter>
  )
}

export default HomeFooter
