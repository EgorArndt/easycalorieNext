import { FC, ChangeEvent, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { AppTheme } from '@theme/models'

type TextareaProps = {
  id?: string
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  disabled?: boolean
  componentRef?: RefObject<HTMLTextAreaElement>
  [key: string]: unknown
}

export type EnhancedTextareaProps = TextareaProps & WithStylesProps

const StyledTextArea = styled.textarea<Partial<TextareaProps>>`
  &&&&& {
    background-color: none !important;
    border-radius: 3px;
    border: 0;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    display: block;
    line-height: 1.7;
    height: 100%;
    width: 100%;
    min-height: 100px;
    outline: 0;
    padding: 7px 10px;
    resize: none;
    white-space: normal;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    overflow-wrap: break-word;

    ${({ theme }) => `
      border: 1px solid ${(theme as AppTheme).mutatable.border.color};
      transition: ${(theme as AppTheme).readonly.transition};
      &:hover, &:focus {
        border-color: ${(theme as AppTheme).mutatable.border.colorOnHover};
      }
    `}
  }
`

const _Textarea: FC<TextareaProps> = ({
  type,
  id,
  componentRef,
  ...props
}: TextareaProps) => (
  <StyledTextArea id={id} name={id} ref={componentRef} {...props} />
)

const Textarea = withStyles<EnhancedTextareaProps>(_Textarea)

export default Textarea
