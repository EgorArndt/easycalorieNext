import { useState, useEffect, FC, ReactNode } from 'react'
import { useRouter } from 'next/router'

import HomeFooter from '../footers/HomeFooter'
import { HeaderBase, HeaderBaseProps } from '@layouts/base'
import { Logo, Hamburger, HamburgerMenu } from '@layouts/helpers'
import { CenterNav, RightBlock } from '../headers/home'
import { useBreakpoints } from '@hooks'
import { links, menuItems } from '../headers/home/constants'
import { Link, Box } from '@ui'

export type HomeLayoutProps = {
  hamburgerContent?: ReactNode
  centerNav?: ReactNode | boolean
  left?: ReactNode | boolean
  right?: ReactNode | boolean
  footer?: ReactNode
} & HeaderBaseProps

/**
 * Renders header, footer, and what's in between.
 * Tip: Header part passed as true disappears
 */

export const HomeLayout: FC<HomeLayoutProps> = ({
  children,
  centerNav,
  right,
  hamburgerContent,
  footer,
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
        left={<Logo />}
        right={
          isMobileSize ? (
            <Hamburger
              onChange={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
              checked={isHamburgerMenuOpen}
            />
          ) : right ? (
            right
          ) : (
            <RightBlock />
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
              {links.map(({ txt, to }) => (
                <Link key={txt} to={to} spacing={{ p: 2 }}>
                  {txt}
                </Link>
              ))}
            </HamburgerMenu>
            <Box center gap='2rem' spacing={{ p: 1 }} palette='primary'>
              <RightBlock />
            </Box>
          </div>
        )
      ) : (
        <>{children}</>
      )}
      {footer ? footer : <HomeFooter />}
    </>
  )
}
