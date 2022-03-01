import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type SeparatorProps = {
  children?: ReactNode
  componentRef?: RefObject<HTMLDivElement>
}

const StyledSeparator = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0;
  align-items: center;
`

const _TimelineSeparator: FC<SeparatorProps> = ({
  children,
  componentRef,
  ...props
}) => (
  <StyledSeparator ref={componentRef} {...props}>
    {children}
  </StyledSeparator>
)

const TimelineSeparator = withStyles<SeparatorProps & WithStylesProps>(
  _TimelineSeparator,
  null,
  true
)

export default TimelineSeparator
