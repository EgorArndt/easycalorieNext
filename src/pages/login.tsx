import type { Page } from 'next/app'

import HomeLayout from '@layouts/crafted/HomeLayout'
import { Box, Typography, Button, Link } from '@ui'
import { Github, Google, Twitter } from '@icons'

const Login: Page = () => {
  return (
    <Box column align={['flex-start', 'center']} gap='1rem' style={{ minHeight: '100vh', paddingTop: '40%' }}>
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
        width='90%'
        spacing={{ pb: 1.5 }}
        borderBottom
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
      <Link to='/' spacing={{ pb: 1 }}>
        Continue with Email &#8594;
      </Link>
    </Box>
  )
}

Login.getLayout = (page) => (
  <HomeLayout centerNav borderBottom>
    {page}
  </HomeLayout>
)

export default Login
