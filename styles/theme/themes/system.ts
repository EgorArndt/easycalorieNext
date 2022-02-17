import { AppTheme } from '../models'
import { setSpacing, setFontSize } from '../utils'

export const System: AppTheme = {
    mutatable: {
      global: {
        bg: '#fff',
        bgOnHover: null,
        contrastText: '#696969',
        textOnHover: null,
      },
      fallback: {
        bg: '#fff',
        bgOnHover: null,
        contrastText: '#696969',
        textOnHover: '#111',
      },
      appLayout: {
        header: {
            bg: '#000',
            bgOnHover: null,
            contrastText: '#fff',
            textOnHover: null
        },
        hero: {
            bg: '#fff',
            bgOnHover: null,
            contrastText: '#666',
            textOnHover: null
        },
        main: {
            bg: '#fafafa',
            bgOnHover: null,
            contrastText: '#444',
            textOnHover: null
        },
        footer: {
            bg: '#fafafa',
            bgOnHover: null,
            contrastText: '#8c8c8c',
            textOnHover: '#111'
        },
      },
      textColors: {
        primary: '#000',
        secondary: '#111',
        tertiary: '#0070f3',
        disabled: '#888'
      },
      // Add withTheme states to components (disabled, active)
      border: '#eaeaea',
      palettes: {
        primary: {
            bg: '#fff',
            bgOnHover: '#eaeaea',
            contrastText: '#666',
            textOnHover: '#000'
        },
        secondary: {
            bg: '#fafafa',
            bgOnHover: '#eaeaea',
            contrastText: '#444',
            textOnHover: '#000'
        },
      },
      ui: {
        link: {
            primary: {
                bg: 'rgba(0, 118, 255, 0.9)',
                bgOnHover: 'transparent',
                contrastText: '#fff',
                textOnHover: 'rgba(0, 118, 255, 0.9)'
            },
        },
        button: {
            primary: {
                bg: '#000',
                bgOnHover: 'transparent',
                contrastText: '#fff',
                textOnHover: '#000'
            },
            secondary: {
                bg: '#fff',
                bgOnHover: null,
                contrastText: '#666',
                textOnHover: '#000'            
            }
        }
      }
    },
    readonly: {
        zIndex: {
            fullScreen: 10002,
            popup: 10001,
            appLayout: 10000,
        },
        transition: '200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        spacing: (factor) => setSpacing(factor),
        fontSize: (fontSize) => setFontSize(fontSize),
        commonColors: {
            disabled: {
                bg: '#fafafa',
                bgOnHover: null,
                contrastText: '#666',
                textOnHover: null
            },
            grey: {
                50: '#343434',
                100: '#b7b8b7',
                200: 'rgba(0,0,0,.2)',
                300: 'rgb(157, 165, 180)',
            },
            error: {
                bg: '#f44336',
                bgOnHover: '#d32f2f',
                contrastText: '#fff',
                textOnHover: null
                // light: '#e57373',
            },
            warning: {
                bg: '#ffa726',
                bgOnHover: '#f57c00',
                contrastText: '#fff',
                textOnHover: null
                // light: '#ffb74d'
            },
            info: {
                bg: 'rgba(0, 118, 255, 0.9)',
                // bg: '#29b6f6',
                bgOnHover: '#0971f1',
                contrastText: '#fff',
                textOnHover: null
                // light: '#4fc3f7'
            },
            success: {
                bg: '#2da44e',
                bgOnHover: '#388e3c',
                contrastText: '#fff',
                textOnHover: null
                // light: '#81c784'
            },
        }
    }
}
