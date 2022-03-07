import { FC } from 'react'

import { Logo } from '@layouts/helpers'
import { Box, Typography } from '@ui'
import { useAuth } from '@lib/auth'
import Avatar from 'components/helpers/Avatar'
import DiagonalDivider from 'components/helpers/DiagonalDivider'

const User: FC = () => {
  const { user, loading } = useAuth()

  return (
    <Box center>
      <Logo />
      <DiagonalDivider />
      <Avatar
        imgSrc={user?.photoUrl}
        nodeOnRight={
          <Typography color='primary' bold>
            {user?.name}
          </Typography>
        }
      />
    </Box>
  )
}

export default User
