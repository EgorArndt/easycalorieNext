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

export type ThemedStyle = {
  bg: string
  contrastText: string
  bgOnHover: string | null
  textOnHover: string | null
}

export type PaletteProps = {
  primary?: ThemedStyle
  secondary?: ThemedStyle
  tertiary?: ThemedStyle
  inherit?: ThemedStyle
  info?: ThemedStyle
  warning?: ThemedStyle
  error?: ThemedStyle
  success?: ThemedStyle
  default?: ThemedStyle
  disabled?: ThemedStyle
}

export type MutatableTheme = {
  global: ThemedStyle
  fallback: ThemedStyle
  appLayout: {
    header: ThemedStyle
    main: ThemedStyle
    hero: ThemedStyle
    footer: ThemedStyle
  }
  textColors: {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
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
    xs: string,
    s: string,
    m: string,
    l: string,
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
    disabled: ThemedStyle
    error: ThemedStyle
    warning: ThemedStyle
    info: ThemedStyle
    success: ThemedStyle
  }
}

export interface AppTheme {
  mutatable: MutatableTheme
  readonly readonly: ReadonlyTheme
}
