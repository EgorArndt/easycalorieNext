import { FC, Fragment } from 'react'

import { Dropdown, DropdownItem, DropdownTrigger, Divider, Button } from '@ui'
import { ThreeDots, Plus } from '@icons'
import { utilityClasses } from '@theme/constants'
import { useNav } from '@hooks'
import { BottomIcon, Avatar } from 'components/helpers'
import { useAuth } from '@lib/auth'
import { FormattedUser } from '@lib/models'

const UserMenu: FC = () => {
  const { user, isLoading, signout } = useAuth()
  const [Dashboard] = useNav({ ids: ['dashboard'] })
  const dropdownItems = [
    Dashboard,
    <Button iSize={12} after={<Plus />} align='space-between'>
      New team
    </Button>,
    <Button>Settings</Button>,
    <Button>Theme</Button>,
    <Button>Command menu</Button>,
    <Button onClick={() => signout('/')}>Log out</Button>,
  ]

  return (
    <Dropdown
      offsetX={-100}
      trigger={
        <DropdownTrigger after={<ThreeDots />}>
          {!isLoading && user && user?.photoUrl && (
            <>
              <Avatar imgSrc={user.photoUrl} />
              <BottomIcon variant='online' />
            </>
          )}
        </DropdownTrigger>
      }
    >
      {dropdownItems.map((item, idx) => (
        <Fragment key={idx}>
          <DropdownItem className={idx === 0 ? utilityClasses.active : ''}>
            {item}
          </DropdownItem>
          {idx !== 1 && idx !== 5 && <Divider />}
        </Fragment>
      ))}
    </Dropdown>
  )
}

export default UserMenu
