import { FC } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type ConnectorProps = {
  look?: 'dashed' | 'line'
}

const StyledConnector = styled.span<Partial<ConnectorProps>>`
  border: 1px solid;
  ${({ look }) => look === 'dashed' && 'border-style: dashed;'}
  flex-grow: 1;
`

const _TimelineConnector: FC<ConnectorProps> = ({
  ...props
}: ConnectorProps) => <StyledConnector {...props} />

const TimelineConnector = withStyles<ConnectorProps & WithStylesProps>(
  _TimelineConnector
)

export default TimelineConnector
