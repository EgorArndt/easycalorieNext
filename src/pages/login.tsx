import type { Page } from 'next/app'

import { HomeLayout } from '@layouts/complete/HomeLayout'
import { Box, Typography, Button, Link } from '@ui'
import { Github, Google, Twitter } from '@icons'
import { useBreakpoints } from '@hooks'
import { mainInlineSpacing } from '@layouts/constants'

const Login: Page = () => {
  const { isS, isXs } = useBreakpoints()
  const isMobileSize = isS || isXs

  return (
    <Box
      center
      column
      style={{
        paddingInline: mainInlineSpacing,
      }}
    >
      <Box
        gap='1rem'
        palette='primary'
        column
        center
        style={{ paddingBlock: '10% 2rem' }}
      >
        <Typography
          color='primary'
          textAlign='center'
          weight={800}
          style={{
            letterSpacing: -3,
            fontSize: '3rem',
          }}
        >
          Log in to Easycalorie
        </Typography>
        <Box
          column
          gap='1rem'
          center
          width='100%'
          spacing={{ pb: 1.5 }}
          borderBottom={!isMobileSize}
        >
          {[
            { txt: 'Continue with Google', i: <Google /> },
            { txt: 'Continue with Github', i: <Github /> },
            { txt: 'Continue with Twitter', i: <Twitter /> },
          ].map(({ txt, i }) => (
            <Button
              key={txt}
              before={i}
              palette='primary'
              size='l'
              unresponsiveSize
              width='100%'
              style={{ border: '1px solid' }}
            >
              {txt}
            </Button>
          ))}
        </Box>
        <Link to='/' palette='inherit' variant='ghost'>
          Continue with Email &#8594;
        </Link>
      </Box>
      <Box
        borderTop
        center
        width='100vw'
        style={{ marginTop: '10%' }}
        spacing={{ p: 2 }}
      >
        <Link to='/' palette='info' variant='contained-reversed'>
          Don&apos;t have an account? Sign up!
        </Link>
      </Box>
    </Box>
  )
}

Login.getLayout = (page) => (
  <HomeLayout borderBottom centerNav>
    {page}
  </HomeLayout>
)

export default Login
