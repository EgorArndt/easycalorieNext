import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { sizes } from './constants'
import { AppTheme } from '@theme/models'

type ModalWindowProps = {
  children: ReactNode
  size?: keyof typeof sizes
  componentRef?: RefObject<HTMLDivElement>
}

export type EnhancedModalWindowProps = ModalWindowProps & WithStylesProps

const StyledModalWindow = styled.div<ModalWindowProps>`
  max-height: 500px;
  width: ${({ size = 'm' }) => `clamp${sizes[size]}`};
  z-index: ${({ theme }) => (theme as AppTheme).readonly.zIndex.modal};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 24%) 0px 4px 4px;
  overflow: hidden;
  overflow-y: auto;
`

const _ModalWindow: FC<ModalWindowProps> = ({
  children,
  componentRef,
  ...props
}: ModalWindowProps) => (
  <StyledModalWindow ref={componentRef} {...props}>
    {children}
  </StyledModalWindow>
)

export const ModalWindow = withStyles<EnhancedModalWindowProps>(
  _ModalWindow,
  null,
  true
)
