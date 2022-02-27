import { FC } from 'react'

import { Link } from '@ui'
import routes from 'constants/routes'

const RightButtonBlock: FC = () => {
  return (
    <>
      <Link to={routes.login} palette='success' size='s'>
        Log in
      </Link>
      <Link to={routes.login} palette='inherit' variant='bgless'>
        Support
      </Link>
    </>
  )
}

export default RightButtonBlock
