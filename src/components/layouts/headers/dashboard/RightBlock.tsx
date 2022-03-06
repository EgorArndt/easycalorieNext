import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { BottomIcon, FeedbackButton } from '../helpers'
import { useAuth } from '@lib/AuthProvider'
import {
  Button,
  Icon,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Divider,
} from '@ui'
import { useNav } from '@hooks'
import { utilityClasses } from '@theme/constants'

// TODO remove it
import person from '@public/persons/community.png'
import { Plus, ThreeDots } from '@icons'

const RightBlock: FC = () => {
  const { pathname } = useRouter()
  const [Contact, Dashboard] = useNav({ ids: ['contact', 'dashboard'] })
  // TODO can be null but works for now
  // const { signout } = useAuth()

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
    <>
      <FeedbackButton />
      {Contact}
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
    </>
  )
}

export default RightBlock
