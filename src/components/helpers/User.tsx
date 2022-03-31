import { FC } from 'react'

import { Logo } from '@layouts/helpers'
import { Box, Typography } from '@ui'
import { useAuth } from '@lib/auth'
import { Avatar, DiagonalDivider } from 'components/helpers'

const User: FC = () => {
  const { user } = useAuth()

  return (
    <Box center>
      <Logo />
      {user && user.photoUrl && (
        <>
          <DiagonalDivider />
          <Avatar
            imgSrc={user?.photoUrl}
            nodeOnRight={
              <Typography color='primary' bold>
                {user?.name}
              </Typography>
            }
          />
        </>
      )}
    </Box>
  )
}

export default User
