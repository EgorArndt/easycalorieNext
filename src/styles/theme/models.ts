import { fontSizes } from './constants'

export type FontSize = keyof typeof fontSizes

type SpacingValues =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 5.5
  | 6
  | 6.5
  | 7
  | 7.5
  | 8
  | 8.5
  | 9
  | 9.5
  | 10

export type SpacingShortcuts = {
  m?: SpacingValues
  p?: SpacingValues

  mx?: SpacingValues
  px?: SpacingValues
  my?: SpacingValues
  py?: SpacingValues

  mt?: SpacingValues
  ml?: SpacingValues
  mr?: SpacingValues
  mb?: SpacingValues

  pt?: SpacingValues
  pl?: SpacingValues
  pr?: SpacingValues
  pb?: SpacingValues
}

export type ThemedStyles = {
  bg: string
  contrastText: string
  bgOnHover: string | null
  textOnHover: string | null
}

export type PaletteProps = {
  primary?: ThemedStyles
  secondary?: ThemedStyles
  tertiary?: ThemedStyles
  inherit?: ThemedStyles
  purple?: ThemedStyles
  pink?: ThemedStyles
  info?: ThemedStyles
  warning?: ThemedStyles
  error?: ThemedStyles
  success?: ThemedStyles
  default?: ThemedStyles
  disabled?: ThemedStyles
}

export type MutatableTheme = {
  global: ThemedStyles
  fallback: ThemedStyles
  textColors: {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
  }
  appLayout: {
    hero: ThemedStyles
  }
  border: string
  palettes: PaletteProps
  ui: {
    button: PaletteProps
    link: PaletteProps
    input?: PaletteProps
  }
}

export type ReadonlyTheme = {
  breakpoints: {
    xs: string
    s: string
    m: string
    l: string
    xl: string
  }
  zIndex: {
    fullScreen: 10002
    popup: 10001
    appLayout: 10000
  }
  transition: string
  spacing: (factor: SpacingShortcuts) => string
  fontSize: (fontSize?: FontSize) => string
  commonColors: {
    disabled: ThemedStyles
    purple: ThemedStyles
    pink: ThemedStyles
    error: ThemedStyles
    warning: ThemedStyles
    info: ThemedStyles
    success: ThemedStyles
  }
}

export interface AppTheme {
  mutatable: MutatableTheme
  readonly readonly: ReadonlyTheme
}
