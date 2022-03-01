import { ReactElement } from 'react'

import { Link, Menu, MenuButton, GridGroup, Typography } from '@ui'
import { ArrowLeft as ArrowDown } from '@icons'
import { usePalette } from '@hooks'

type CenterProps = {
  menuItems: {
    title: string
    i: ReactElement
  }[]
  links: string[]
}

const CenterNav = ({ menuItems, links }: CenterProps) => {
  const { bg, contrastText } = usePalette('primary', 'button')

  return (
    <>
      <Menu
        transition
        offsetY={37}
        menuButton={({ open }) => (
          <MenuButton
            palette='inherit'
            variant='ghost'
            iSize={6}
            after={
              <ArrowDown
                style={{
                  transform: `rotate(${open ? 90 : -90}deg)`,
                  transition: 'ease 0.3s',
                }}
              />
            }
          >
            Features
          </MenuButton>
        )}
      >
        <GridGroup
          borderBottom
          palette='primary'
          gap='3rem'
          itemSize={{ min: 300, max: 400 }}
          width='100vw'
          spacing={{ p: 2 }}
          center
        >
          {menuItems.map(({ title, i }) => (
            <Link
              key={title}
              to={title}
              fontSize='body1'
              palette='inherit'
              spacing={{ py: 2, px: 3 }}
              gap='1rem'
              align='left'
              before={i}
              iSize={25}
              iClass='feature-icon'
            >
              <span>
                <Typography color='primary' bold>
                  {title}
                </Typography>
                <br />
                Lorem ipsum dolor sit amet.
              </span>
              <style jsx global>{`
                .feature-icon {
                  background-color: ${bg};
                  color: ${contrastText} !important;
                  width: 48px !important;
                  height: 48px !important;
                  border-radius: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                }
              `}</style>
            </Link>
          ))}
        </GridGroup>
      </Menu>
      {links.map((str) => (
        <Link
          key={str}
          to={str}
          fontSize='body1'
          palette='inherit'
          variant='ghost'
          spacing={{ ml: 3 }}
        >
          {str}
        </Link>
      ))}
    </>
  )
}

export default CenterNav
