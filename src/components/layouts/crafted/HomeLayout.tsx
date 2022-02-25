import { useState, useEffect, FC } from 'react'

import HomeFooter from '../footers/HomeFooter'
import { HeaderBase, Main } from '@layouts/base'
import { Logo } from '@layouts/helpers'
import { Center, Right } from '../headers/home'
import { Hamburger, HamburgerProps } from '@layouts/helpers/hamburger'
import { HamburgerMenu } from '@layouts/helpers/hamburger/menu'
import { useBreakpoints } from '@hooks'
import { links, menuItems } from '../headers/home/constants'
import { Link, Box, BoxProps } from '@ui'

const HomeLayout: FC<BoxProps> = ({ children, ...props }: BoxProps) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)
  const { isXs, isS } = useBreakpoints()
  const isMobileSize = isS || isXs

  useEffect(() => {
    if (!isMobileSize) setIsHamburgerMenuOpen(false)
  }, [isMobileSize])

  const swapMain: HamburgerProps['onChange'] = (_, setChecked, checked) => {
    setChecked(!checked)
    setIsHamburgerMenuOpen(!checked)
  }

  return (
    <>
      <HeaderBase
        left={<Logo color='secondary' />}
        right={
          isMobileSize ? <Hamburger onChange={swapMain} /> : <Right />
        }
        palette={isHamburgerMenuOpen ? 'secondary' : 'primary'}
        fontSize='body1'
        {...props}
      >
        {!isMobileSize && <Center links={links} menuItems={menuItems} />}
      </HeaderBase>
      {isHamburgerMenuOpen && isMobileSize 
        ?
          <div>
            <HamburgerMenu palette='primary'>
              {links.map((str) => (
                <Link key={str} to={str} spacing={{ p: 2 }}>
                  {str}
                </Link>
              ))}
            </HamburgerMenu>
            <Box 
              column
              gap='1rem'
              spacing={{pb: 1}}
            >
              <Right />
            </Box>
          </div>
        :
          <Main {...props}>{children}</Main>         
      }
      <HomeFooter />
    </>
  )
}

export default HomeLayout
