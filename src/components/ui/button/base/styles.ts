import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ButtonBaseProps } from '.'
import { btnSizes } from '../../constants'
import { AppTheme, ThemedStyles, PaletteProps } from '@theme/models'

export type Additional = {
  theme?: AppTheme
  themedStyles?: ThemedStyles | false | Record<string, null>
  _paletteOnActive?:
    | false
    | ThemedStyles
    | {
        bg: null
        bgOnHover: null
        contrastText: null
        textOnHover: null
      }
  colorOnActive?:
    | keyof AppTheme['mutatable']['textColors']
    | keyof AppTheme['readonly']['commonColors']
    | false
}

export const StyledBase = styled.button<Partial<ButtonBaseProps> & Additional>`
  &&& {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    outline: 0px;
    cursor: pointer;
    user-select: none;
    appearance: none;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    font-family: inherit;
    font-size: inherit;
    transition: ${({ theme }) => theme.readonly.transition};
    ${({ _paletteOnActive, variant }) =>
      _paletteOnActive &&
      css`
        background-color: ${_paletteOnActive.bg} !important;
        color: ${variant === 'ghost'
          ? _paletteOnActive.bg
          : _paletteOnActive.contrastText} !important;

        &:hover {
          background-color: ${_paletteOnActive.bgOnHover};
          color: ${_paletteOnActive.textOnHover};
        }
      `}

    &.btn-contained {
      border: 1px solid ${({ themedStyles }) => themedStyles && themedStyles.bg};
    }

    &.btn-contained-reversed {
      ${({ themedStyles, variant }) =>
        variant === 'contained-reversed' &&
        themedStyles &&
        css`
          background-color: ${themedStyles.contrastText} !important;
          color: ${themedStyles.bg} !important;

          &:hover {
            background-color: ${themedStyles.textOnHover} !important;
            color: ${themedStyles.bgOnHover} !important;
          }
        `}
    }

    &.btn-outlined {
      ${({ themedStyles }) =>
        themedStyles &&
        `
        color: ${themedStyles.bg}!important;
        background-color: transparent !important;
        border: 1px solid;

        &:hover {
          color: ${themedStyles.contrastText}!important;
          background-color: ${themedStyles.bg}!important;
          border: 1px solid ${themedStyles.bg};
        }
      `}
    }

    &.btn-ghost {
      background-color: transparent !important;

      &:hover {
        background-color: transparent !important;
      }
    }

    &.btn-small {
      padding: ${btnSizes.s};
    }

    &.btn-medium {
      padding: ${btnSizes.m};
    }

    &.btn-large {
      padding: ${btnSizes.l};
      font-weight: 500;
      font-family: Segoe UI, sans-serif;
    }

    .button-icon {
      width: ${({ iSize = 15 }) => iSize / 16 + 'em'};
      display: flex;
      justify-content: center;
      align-items: center;
      color: inherit;
      pointer-events: none;

      & * {
        width: ${({ iSize = 15 }) => iSize / 16 + 'em'} !important;
        height: ${({ iSize = 15 }) => iSize / 16 + 'em'} !important;
        color: inherit;
        pointer-events: none;
      }
    }

    .before {
      margin-right: 8px;
      margin-left: -4px;
    }

    .after {
      margin-left: 8px;
      margin-right: -4px;
      justify-content: right;
    }
  }
`
