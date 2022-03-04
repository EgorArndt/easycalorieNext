import { FC } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '@lib/AuthProvider'
import { Link, Button } from '@ui'
import { rightNav } from '@layouts/headers/constants'

const RightBlock: FC = () => {
  const { pathname } = useRouter()
  // TODO can be null but works for now
  // const { signinWithGitHub, signout, user } = useAuth()

  return (
    <>
      {rightNav.map(({ id, to }) => (
        <Link
          key={id}
          to={to}
          palette={pathname !== to && 'inherit'}
          variant='ghost'
          color={pathname === to && 'primary'}
        >
          {id}
        </Link>
      ))}
      <Button
        // onClick={() => (user ? signout() : signinWithGitHub())}
        palette='success'
        size='s'
      >
        {/* {user ? 'Sign out' : 'Sign in'} */}
        Sign in
      </Button>
    </>
  )
}

export default RightBlock
