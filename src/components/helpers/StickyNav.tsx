import { useState, useEffect, useRef, FC } from 'react'
import { useTheme } from '@emotion/react'

import { AppContainer } from '@layouts/base'
import { Box } from '@ui'
import { useBreakpoints, useNav, UseNavProps } from '@hooks'
import { AppTheme } from '@theme/models'

const StickyNav: FC<UseNavProps> = ({ ids, ...props }: UseNavProps) => {
  const links = useNav({
    ids,
    size: 's',
    style: { border: 'none' },
    classOnActive: 'nav-current',
    variant: 'contained',
    colorOnActive: 'primary',
    ...props,
  })

  const { isXs, isS, isM } = useBreakpoints()
  const isMobile = isXs || isS || isM
  const {
    readonly: {
      zIndex: { appLayout },
      transition,
    },
  } = useTheme() as AppTheme

  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: '-1px 0px 0px 0px',
      }
    )

    navRef.current && observer.observe(navRef.current)

    return function () {
      navRef.current && observer.unobserve(navRef.current)
      setIsSticky(false)
    }
  }, [])

  return (
    <Box
      center
      palette='primary'
      boxShadow={isSticky}
      style={{ position: 'sticky', top: 0, zIndex: appLayout, transition }}
      componentRef={navRef}
    >
      <AppContainer
        as='nav'
        role='navigation'
        fontSize='body1'
        gap='0.5rem'
        width='100%'
        spacing={{ my: 0.5 }}
        center={isMobile}
      >
        {links}
        <style jsx global>{`
          .nav-current:before {
            content: '';
            display: block;
            position: absolute;
            height: 0;
            left: 9px;
            right: 9px;
            bottom: -0.5rem;
            border-bottom: 2px solid;
          }
        `}</style>
      </AppContainer>
    </Box>
  )
}

export default StickyNav
