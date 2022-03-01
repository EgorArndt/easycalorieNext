import { FC } from 'react'
import { useRouter } from 'next/router'

import { Link } from '@ui'
import routes from 'constants/routes'

const RightButtonBlock: FC = () => {
  const { pathname } = useRouter()

  const contactLoginLinks = [
    { txt: 'Contact', to: routes.contact },
    { txt: 'Login', to: routes.login },
  ]

  return (
    <>
      {contactLoginLinks.map(({ txt, to }) => (
        <Link
          key={txt}
          to={to}
          palette={pathname !== to && 'inherit'}
          variant='ghost'
          color={pathname === to && 'primary'}
        >
          {txt}
        </Link>
      ))}
      <Link to={routes.login} palette='success' size='s'>
        Sign up
      </Link>
    </>
  )
}

export default RightButtonBlock
