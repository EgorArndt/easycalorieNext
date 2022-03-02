import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ButtonBaseProps } from '.'
import { AppTheme, ThemedStyles } from '@theme/models'

type Additional = {
  theme?: AppTheme
  _onActive?: ThemedStyles | false | Record<string, null>
  themedStyles?: ThemedStyles | false | Record<string, null>
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
    ${({ _onActive, variant }) =>
      _onActive &&
      css`
        background-color: ${_onActive.bg} !important;
        color: ${variant && ['ghost', 'default'].includes(variant)
          ? _onActive.bg
          : _onActive.contrastText} !important;

        &:hover {
          background-color: ${_onActive.bgOnHover};
          color: ${_onActive.textOnHover};
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
      color: ${({ themedStyles }) =>
        themedStyles && themedStyles.bg} !important;
      background-color: transparent !important;
      border: 1px solid;
    }

    &.btn-ghost {
      background-color: transparent !important;

      &:hover {
        background-color: transparent !important;
      }
    }

    &.btn-small {
      padding: 0.6em 0.7em;
    }

    &.btn-medium {
      padding: 0.7rem 1rem;
    }

    &.btn-large {
      padding: 1rem 2rem;
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
