import { FC } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '@lib/auth'
import { Button } from '@ui'
import { useNav } from '@hooks'

const RightBlock: FC = () => {
  const { pathname } = useRouter()
  const links = useNav({ ids: ['login', 'contact'] })
  // TODO can be null but works for now
  // const { signinWithGitHub, signout, user } = useAuth()

  return (
    <>
      {links}
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
