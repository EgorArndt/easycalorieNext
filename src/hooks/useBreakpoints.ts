import { useTheme } from '@emotion/react'

import { useMediaQuery } from '@hooks'
import { AppTheme } from '../styles/theme/models'

/**
 * Get a set of booleans representing which breakpoint is active
 * and which breakpoints are inactive.
 */

export default function useBreakpoints() {
  const {
    readonly: {
      breakpoints: { xs, s, m, l, xl },
    },
  } = useTheme() as AppTheme
  const breakpoints = {
    isXs: useMediaQuery(xs),
    isS: useMediaQuery(s),
    isM: useMediaQuery(m),
    isL: useMediaQuery(l),
    isXl: useMediaQuery(xl),
    active: 'xs',
  }
  if (breakpoints.isXs) breakpoints.active = 'xs'
  if (breakpoints.isS) breakpoints.active = 's'
  if (breakpoints.isM) breakpoints.active = 'm'
  if (breakpoints.isL) breakpoints.active = 'l'
  return breakpoints
}
