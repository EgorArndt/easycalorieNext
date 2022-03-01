import { useState, useEffect, FC, ReactNode } from 'react'
import { useRouter } from 'next/router'

import HomeFooter from '../footers/HomeFooter'
import { HeaderBase, HeaderBaseProps } from '@layouts/base'
import { Logo, Hamburger, HamburgerMenu } from '@layouts/helpers'
import { CenterNav, RightButtonBlock } from '../headers/home'
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
 * Renders header, footer, and what's in between.
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
        borderBottom
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
            <Box center gap='2rem' spacing={{ p: 1 }} palette='primary'>
              <RightButtonBlock />
            </Box>
          </div>
        )
      ) : (
        <>{children}</>
      )}
      <HomeFooter />
    </>
  )
}

export default HomeLayout
