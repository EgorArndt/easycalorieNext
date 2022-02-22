import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { sizes } from './constants'
import { AppTheme } from 'styles/theme/models'

export type ModalWindowProps = {
  children: ReactNode
  size?: keyof typeof sizes
}

type EnhancedModalWindowProps = ModalWindowProps & WithStylesProps

const StyledModalWindow = styled.div<ModalWindowProps>`
  max-height: 500px;
  width: ${({ size = 'm' }) => `clamp${sizes[size]}`};
  z-index: ${({ theme }) => (theme as AppTheme).readonly.zIndex.fullScreen};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 24%) 0px 4px 4px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 60px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`

const _ModalWindow: FC<ModalWindowProps> = ({
  children,
  ...props
}: ModalWindowProps) => (
  <StyledModalWindow {...props}>{children}</StyledModalWindow>
)

export const ModalWindow = withStyles<EnhancedModalWindowProps>(
  _ModalWindow,
  null,
  true
)
