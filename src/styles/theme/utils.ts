import { FontSize, SpacingShortcuts } from './models'
import { spacingShortcuts, fontSizes } from './constants'

export const setSpacing = (spacing: SpacingShortcuts): string => {
  let finalSpacing = ''

  for (const key in spacing) {
    finalSpacing += `${spacingShortcuts[key as keyof SpacingShortcuts]}: ${
      spacing[key as keyof SpacingShortcuts]
    }rem !important;`
  }

  return finalSpacing
}

export const setFontSize = (fontSize = 'body2' as FontSize): string =>
  `clamp(${fontSizes[fontSize]})`
