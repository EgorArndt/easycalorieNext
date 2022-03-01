import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type ContentProps = {
  children?: ReactNode
  componentRef?: RefObject<HTMLSpanElement>
}

const StyledContent = styled.span`
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  flex: 1;
  padding: 6px 16px;
  text-align: left;
`

const _TimelineContent: FC<ContentProps> = ({
  children,
  componentRef,
  ...props
}: ContentProps) => (
  <StyledContent ref={componentRef} {...props}>
    {children}
  </StyledContent>
)

const TimelineContent = withStyles<ContentProps & WithStylesProps>(
  _TimelineContent
)

export default TimelineContent
