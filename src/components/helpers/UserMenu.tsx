import { FC, Fragment } from 'react'
import Image from 'next/image'

import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Icon,
  Divider,
  Button,
} from '@ui'
import { ThreeDots, Plus } from '@icons'
import { utilityClasses } from '@theme/constants'
import { useNav } from '@hooks'
import BottomIcon from 'components/helpers/BottomIcon'
import person from '@public/persons/community.png'

const UserMenu: FC = () => {
  const [Dashboard] = useNav({ ids: ['dashboard'] })
  const dropdownItems = [
    Dashboard,
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
    <Dropdown
      offsetX={-100}
      trigger={
        <DropdownTrigger after={<ThreeDots />}>
          <Icon
            i={<Image layout='fill' src={person} />}
            rounded
            height={40}
            width={40}
            style={{ overflow: 'hidden' }}
          />
          <BottomIcon variant='online' />
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