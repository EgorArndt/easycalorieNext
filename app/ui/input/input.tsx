import { FC, HTMLInputTypeAttribute } from 'react'
import styled from '@emotion/styled'

import { InputCommonProps } from './models'
import { withStyles, WithStylesProps } from '../../hocs/with_styles'

export type InputProps = {
    type?: HTMLInputTypeAttribute
    variant?: 'outlined' | 'contained' | 'default'
    small?: boolean
    placeholder?: string
    animation?: boolean
    disabled?: boolean
} & InputCommonProps

const StyledInput = styled.input<Partial<InputProps>>`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: .7rem;
    outline: none;
    font-size: inherit;
    height: ${({ small }) => small ? '2rem' : '3rem'};
    background: none;
`

const _Input: FC<InputProps> = ({ type, id, ...props }: InputProps) => (
    <StyledInput 
        type={type || 'text'} 
        id={id} 
        name={id}
        {...props} 
    />
) 

const Input = withStyles<InputProps & WithStylesProps>(_Input)

export default Input