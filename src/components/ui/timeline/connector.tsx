import { FC, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type ConnectorProps = {
  look?: 'dashed' | 'line'
  componentRef?: RefObject<HTMLSpanElement>
}

const StyledConnector = styled.span<Partial<ConnectorProps>>`
  border: 1px solid;
  ${({ look }) => look === 'dashed' && 'border-style: dashed;'}
  flex-grow: 1;
`

const _TimelineConnector: FC<ConnectorProps> = ({
  componentRef,
  ...props
}: ConnectorProps) => <StyledConnector ref={componentRef} {...props} />

const TimelineConnector = withStyles<ConnectorProps & WithStylesProps>(
  _TimelineConnector
)

export default TimelineConnector
