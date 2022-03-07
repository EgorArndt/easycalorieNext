import { FC } from 'react'

import { Button, ButtonProps } from '@ui'
import { useAuth } from '@lib/AuthProvider'

const SignInButton: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  const { signinWithGitHub, signout, user } = useAuth()

  return user === null ? null : (
    <Button
      onClick={() => (user ? signout() : signinWithGitHub())}
      palette='success'
      size='s'
      {...props}
    >
      {user ? 'Sign out' : 'Sign in'}
    </Button>
  )
}

export default SignInButton
