import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { Direction } from '../tablist/constants'

type LabelProps = {
  direction?: keyof typeof Direction
  children: ReactNode
  id: string
  name?: string
  componentRef?: RefObject<HTMLLabelElement>
}

export type EnhancedLabelProps = LabelProps & WithStylesProps

const StyledLabel = styled.label<
  LabelProps & { _direction?: keyof typeof Direction }
>`
  display: inline-flex;
  ${({ _direction }) =>
    _direction &&
    `
      align-items: ${
        ['top', 'bottom'].includes(_direction as Direction) ? 'left' : 'center'
      };
      justify-content: ${
        ['top', 'bottom'].includes(_direction as Direction) ? 'center' : 'left'
      };
      flex-direction: ${Direction[_direction]};
  `}
  position: relative;
  user-select: none;
  width: 100%;
  gap: 0.7rem;
`

const _Label: FC<LabelProps> = ({
  children,
  id,
  direction,
  componentRef,
  ...props
}: LabelProps) => (
  <StyledLabel
    as='label'
    id={id}
    name={id}
    _direction={direction}
    ref={componentRef}
    {...props}
  >
    {children}
  </StyledLabel>
)

const Label = withStyles<EnhancedLabelProps>(_Label, null, true)

export default Label
