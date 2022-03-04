import { useMemo } from 'react'
import { useTheme } from '@emotion/react'
import { get } from 'lodash-es'

import { AppTheme, PaletteProps, ThemedStyles } from '@theme/models'

const usePalette = (
  palette?: keyof PaletteProps | false,
  uiKey?: keyof AppTheme['mutatable']['ui'] | null
) => {
  const theme = useTheme()
  return useMemo(() => {
    if (!palette || ['default', 'inherit'].includes(palette))
      return {
        bg: null,
        bgOnHover: null,
        contrastText: null,
        textOnHover: null,
      }

    const {
      mutatable: { wrapperPalettes, ui },
      readonly: { commonColors },
    } = theme as AppTheme

    let accessor: PaletteProps | undefined

    if (uiKey) accessor = ui[uiKey]
    else accessor = wrapperPalettes
    if (Object.keys(commonColors).includes(palette)) accessor = commonColors

    const getThemedStyle = (style: keyof ThemedStyles) =>
      get(accessor, `${palette}.${style}`, null)

    return {
      bg: getThemedStyle('bg'),
      bgOnHover: getThemedStyle('bgOnHover'),
      contrastText: getThemedStyle('contrastText'),
      textOnHover: getThemedStyle('textOnHover'),
    } as ThemedStyles
  }, [])
}

export default usePalette
