import { useState, useEffect, FC, ReactNode } from 'react'
import { useRouter } from 'next/router'

import HomeFooter from '../footers/HomeFooter'
import { HeaderBase, HeaderBaseProps, Main } from '@layouts/base'
import { Logo } from '@layouts/helpers'
import { CenterNav, RightButtonBlock } from '../headers/home'
import { Hamburger } from '@layouts/helpers/hamburger'
import { HamburgerMenu } from '@layouts/helpers/hamburger/menu'
import { useBreakpoints } from '@hooks'
import { links, menuItems } from '../headers/home/constants'
import { Link, Box } from '@ui'

type HomeLayoutProps = {
  hamburgerContent?: ReactNode
  centerNav?: ReactNode | boolean
  left?: ReactNode | boolean
  right?: ReactNode | boolean
} & HeaderBaseProps

/**
 * Tip: Header part passed as true disappears
 */

const HomeLayout: FC<HomeLayoutProps> = ({
  children,
  centerNav,
  right,
  hamburgerContent,
  ...props
}: HomeLayoutProps) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
  const { pathname } = useRouter()
  const { isXs, isS } = useBreakpoints()
  const isMobileSize = isS || isXs

  useEffect(() => {
    if (!isMobileSize) setIsHamburgerMenuOpen(false)

    return () => setIsHamburgerMenuOpen(false)
  }, [isMobileSize, pathname])

  return (
    <>
      <HeaderBase
        left={<Logo color='secondary' />}
        right={
          isMobileSize ? (
            <Hamburger
              onChange={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
              checked={isHamburgerMenuOpen}
            />
          ) : right ? (
            right
          ) : (
            <RightButtonBlock />
          )
        }
        palette='primary'
        fontSize='body1'
        {...props}
      >
        {!isMobileSize &&
          (centerNav ? (
            centerNav
          ) : (
            <CenterNav links={links} menuItems={menuItems} />
          ))}
      </HeaderBase>
      {isHamburgerMenuOpen && isMobileSize ? (
        hamburgerContent ? (
          hamburgerContent
        ) : (
          <div>
            <HamburgerMenu palette='primary'>
              {links.map((str) => (
                <Link key={str} to={str} spacing={{ p: 2 }}>
                  {str}
                </Link>
              ))}
            </HamburgerMenu>
            <Box column gap='1rem' spacing={{ pb: 1 }}>
              <RightButtonBlock />
            </Box>
          </div>
        )
      ) : (
        <Main>{children}</Main>
      )}
      <HomeFooter />
    </>
  )
}

export default HomeLayout
