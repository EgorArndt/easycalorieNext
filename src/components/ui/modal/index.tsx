import { ElementType, FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { Box, Header } from '@ui'
import { ModalWindow, EnhancedModalWindowProps } from './window'
import { AppTheme } from '@theme/models'

export type ModalProps = {
  title?: string
  content?: ElementType | ReactNode
  noBackdrop?: boolean
  onClose?: () => void
  closable?: boolean
} & Omit<EnhancedModalWindowProps, 'children'>

const ModalBackdrop = styled.div<Partial<ModalProps>>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${({ noBackdrop }) => !noBackdrop && 'background-color: rgba(0, 0, 0, 0.7)'};
  z-index: ${({ theme }) => (theme as AppTheme).readonly.zIndex.modal};

  & + .modal-closer {
    position: absolute !important;
    opacity: 0.5;
    transition: 0.7s ease;
    top: 2rem;
    right: 2rem;
    z-index: ${({ theme }) => (theme as AppTheme).readonly.zIndex.modal};
    color: white;
    transform: scale(1.5);
    pointer-events: none;
    padding: 0.8em 1em;
  }

  &:hover + .modal-closer {
    opacity: 1;
  }
`

const Modal: FC<ModalProps> = ({
  content,
  title,
  onClose,
  closable,
  noBackdrop,
  ...props
}: ModalProps) => (
  <Box style={{ position: 'absolute' }} height='100vh' width='100vw' center>
    <ModalBackdrop
      noBackdrop={noBackdrop}
      onClick={() => (closable && onClose ? onClose() : null)}
    />
    {closable && <span className='modal-closer'>&#9587;</span>}
    <ModalWindow {...props}>
      {title && <Header title={title} />}
      {content}
    </ModalWindow>
  </Box>
)

export default Modal
