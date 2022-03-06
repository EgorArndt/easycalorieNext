import { createElement, ReactElement } from 'react'
import { useRouter } from 'next/router'
import { capitalize } from 'lodash-es'

import routes from 'constants/routes'
import { Link, LinkProps } from '@ui'

export type UseNavProps = {
  ids: Array<RouteName>
} & Partial<LinkProps>

type RouteName = keyof typeof routes
type NavigationLinks = Array<ReactElement>

const useNav = ({ ids, classOnActive, styleOnActive, paletteOnActive, colorOnActive, ...props }: UseNavProps): NavigationLinks => {
  const { pathname } = useRouter()
  const jsx: NavigationLinks = []

  for (const key in routes) {
    const isActive = pathname === routes[key as RouteName]

    ids.includes(key as RouteName) &&
      jsx.push(
          createElement(Link, {
            key,
            palette: !isActive && 'inherit',
            variant: 'ghost',
            color: isActive && 'primary',
            children: capitalize(key.replace('_', ' ')),
            paletteOnActive: isActive && paletteOnActive,
            styleOnActive: isActive && styleOnActive,
            classOnActive: isActive && classOnActive,
            colorOnActive: isActive && colorOnActive,
            ...props,
            to: routes[key as RouteName],
          })
        )
  }

  return jsx
}

export default useNav
