import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ButtonBaseProps } from '.'
import { AppTheme, ThemedStyle } from '../../../../styles/theme/models'

type Additional = {
  theme?: AppTheme
  _onActive?: ThemedStyle | false | Record<string, null>
  derivedStyles?: ThemedStyle | false | Record<string, null>
}

export const StyledCore = styled.button<Partial<ButtonBaseProps> & Additional>`
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
    transition: ${({ theme }) => theme.readonly.transition};
    ${({ _onActive, variant }) =>
      _onActive &&
      css`
        background-color: ${_onActive.bg} !important;
        color: ${variant && ['bgless', 'default'].includes(variant)
          ? _onActive.bg
          : _onActive.contrastText} !important;

        &:hover {
          background-color: ${_onActive.bgOnHover};
          color: ${_onActive.textOnHover};
        }
      `}

    &.btn-contained {
    }

    &.btn-contained-reversed {
      ${({ derivedStyles }) =>
        derivedStyles &&
        css`
          background-color: ${derivedStyles.contrastText} !important;
          color: ${derivedStyles.bg} !important;

          &:hover {
            background-color: ${derivedStyles.textOnHover} !important;
            color: ${derivedStyles.bgOnHover} !important;
          }
        `}
    }

    &.btn-outlined {
      background-color: transparent !important;
      border: 1px solid;
    }

    &.btn-bgless {
      background-color: transparent !important;

      &:hover {
        background-color: transparent !important;
      }
    }

    &.btn-default:not(.active) {
      background-color: transparent !important;
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
