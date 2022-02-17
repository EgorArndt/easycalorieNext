import { useMemo } from 'react'
import { useTheme } from '@emotion/react'
import { get } from 'lodash-es'

import { AppTheme, PaletteProps, ThemedStyle } from '../../styles/theme/models'

const usePalette = (
    palette?: keyof PaletteProps | false,
    uiKey?: keyof AppTheme['mutatable']['ui'] | null, 
) => {
    const theme = useTheme()
    return useMemo(() => {
        if (!palette || ['default', 'inherit'].includes(palette)) 
        return {bg: null, bgOnHover: null, contrastText: null, textOnHover: null}
        
        const { 
            mutatable: { palettes, ui, fallback }, 
            readonly: { commonColors } 
        } = theme as AppTheme
    
        let accessor: PaletteProps | undefined
    
        if (uiKey) accessor = ui[uiKey]
        else accessor = palettes
        if (Object.keys(commonColors).includes(palette)) accessor = commonColors
    
        const getThemeStyles = (style: keyof ThemedStyle) => get(accessor, `${palette}.${style}`, fallback[style])
    
        return (
            {
                bg: getThemeStyles('bg'),
                bgOnHover: getThemeStyles('bgOnHover'),
                contrastText: getThemeStyles('contrastText'),
                textOnHover: getThemeStyles('textOnHover'),
            } as ThemedStyle
        )
    }, [])
}

export default usePalette