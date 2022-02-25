import { FooterBase } from '@layouts/base'
import { Typography, Box, Link } from '@ui'
import { Logo } from '@layouts/helpers'
import { Github, Twitter } from '@icons'

const HomeFooter = () => {
  const headers = [
    'About this app',
    'If you wish to support us😍',
    'About the author',
    'Legal',
  ].map((str) => (
    <Typography key={str} bold color='primary'>
      {str}
    </Typography>
  ))
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
      header: headers[0],
      items,
    },
    {
      header: headers[1],
      items,
    },
    {
      header: headers[2],
      items,
    },
    {
      header: headers[3],
      items,
    },
  ]

  return (
    <FooterBase cols={cols}>
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
    </FooterBase>
  )
}

export default HomeFooter
