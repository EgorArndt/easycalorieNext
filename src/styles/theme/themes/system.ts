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
    textColors: {
      primary: '#000',
      secondary: '#111',
      tertiary: '#0070f3',
      disabled: '#888',
    },
    appLayout: {
      hero: {
        bg: 'radial-gradient(70% 70% at 50% 100%,#e8e8e8 0,#fafafa 100%)',
        bgOnHover: null,
        contrastText: '#666',
        textOnHover: null,
      },
    },
    border: '#eaeaea',
    palettes: {
      primary: {
        bg: '#fff',
        bgOnHover: '#eaeaea',
        contrastText: '#666',
        textOnHover: '#000',
      },
      secondary: {
        bg: '#fafafa',
        bgOnHover: '#eaeaea',
        contrastText: '#444',
        textOnHover: '#000',
      },
    },
    ui: {
      link: {
        primary: {
          bg: 'rgba(0, 118, 255, 0.9)',
          bgOnHover: 'transparent',
          contrastText: '#fff',
          textOnHover: 'rgba(0, 118, 255, 0.9)',
        },
      },
      button: {
        primary: {
          bg: '#000',
          bgOnHover: 'transparent',
          contrastText: '#fff',
          textOnHover: '#000',
        },
        // secondary: {
        //   bg: '#fff',
        //   bgOnHover: null,
        //   contrastText: '#666',
        //   textOnHover: '#000',
        // },
      },
    },
  },
  readonly: {
    breakpoints: {
      xs: '(max-width: 640px)',
      s: '(min-width: 641px) and (max-width: 768px)',
      m: '(min-width: 769px) and (max-width: 1024px)',
      l: '(min-width: 1025px)',
    },
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
        textOnHover: null,
      },
      error: {
        bg: '#f44336',
        bgOnHover: '#d32f2f',
        contrastText: '#fff',
        textOnHover: null,
      },
      warning: {
        bg: '#ffa726',
        bgOnHover: '#f57c00',
        contrastText: '#fff',
        textOnHover: null,
      },
      info: {
        bg: 'rgba(0, 118, 255, 0.9)',
        bgOnHover: '#0971f1',
        contrastText: '#fff',
        textOnHover: null,
      },
      success: {
        bg: '#2da44e',
        bgOnHover: '#388e3c',
        contrastText: '#fff',
        textOnHover: null,
      },
    },
  },
}
