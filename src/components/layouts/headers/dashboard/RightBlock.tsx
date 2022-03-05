import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { BottomIcon, FeedbackButton } from '../helpers'
import { useAuth } from '@lib/AuthProvider'
import {
  Link,
  Button,
  Icon,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Divider,
} from '@ui'
import { rightNav } from '@layouts/headers/constants'
import { utilityClasses } from '@theme/constants'

// TODO remove it
import person from '@public/persons/community.png'
import routes from 'constants/routes'
import { Plus, ThreeDots } from '@icons'

const RightBlock: FC = () => {
  const { pathname } = useRouter()
  // TODO can be null but works for now
  // const { signout } = useAuth()

  const dropdownItems = [
    <Link to={routes.dashboard}>Dashboard</Link>,
    <Button iSize={12} after={<Plus />} align='space-between'>
      New team
    </Button>,
    <Button>Settings</Button>,
    <Button>Theme</Button>,
    <Button>Command menu</Button>,
    <Button
    // onClick={() => signout('/')}
    >
      Log out
    </Button>,
  ]

  return (
    <>
      <FeedbackButton />
      {rightNav.map(
        ({ id, to }) =>
          id === 'Contact' && (
            <Link
              key={id}
              to={to}
              palette={pathname !== to && 'inherit'}
              variant='ghost'
              color={pathname === to && 'primary'}
            >
              {id}
            </Link>
          )
      )}
      <Dropdown
        offsetX={-100}
        trigger={
          <DropdownTrigger after={<ThreeDots />}>
            <Icon rounded height={40} width={40} style={{ overflow: 'hidden' }}>
              <Image layout='fill' src={person} />
            </Icon>
            <BottomIcon variant='online' />
          </DropdownTrigger>
        }
      >
        {dropdownItems.map((item, idx) => (
          <>
            <DropdownItem
              key={idx}
              className={idx === 0 ? utilityClasses.active : ''}
            >
              {item}
            </DropdownItem>
            {idx !== 1 && idx !== 5 && <Divider />}
          </>
        ))}
      </Dropdown>
    </>
  )
}

export default RightBlock
