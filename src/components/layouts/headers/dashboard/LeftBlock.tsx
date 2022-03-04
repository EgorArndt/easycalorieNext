import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Logo } from '@layouts/helpers'
import { Box, Typography, Icon } from '@ui'
import { useAuth } from '@lib/AuthProvider'

// TODO remove it
import person from '@public/persons/community.png'

const LeftBlock: FC = () => {
  const { pathname } = useRouter()
  // TODO can be null but works for now
  // const { signinWithGitHub, signout, user } = useAuth()

  return (
    <Box center>
      <Logo />
      <Box
        border
        height={30}
        width={2}
        spacing={{ mx: 2 }}
        style={{ transform: 'rotate(25deg)' }}
      />
      <Box center gap='1rem'>
        <Icon rounded style={{ overflow: 'hidden' }} height={40} width={40}>
          <Image layout='fill' src={person} />
        </Icon>
        <Typography color='primary' bold>
          {/* {user?.name} */}
          User name
        </Typography>
      </Box>
    </Box>
  )
}

export default LeftBlock
