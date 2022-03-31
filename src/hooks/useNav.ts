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

export default ({
  ids,
  classOnActive,
  styleOnActive,
  paletteOnActive,
  colorOnActive,
  variantOnActive,
  ...props
}: UseNavProps): NavigationLinks => {
  const { pathname } = useRouter()
  const reactElements: NavigationLinks = []

  for (const key in routes) {
    const isActive = pathname === routes[key as RouteName]

    ids.includes(key as RouteName) &&
      reactElements.push(
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
          variantOnActive: isActive && variantOnActive,
          ...props,
          to: routes[key as RouteName],
        })
      )
  }

  return reactElements
}
