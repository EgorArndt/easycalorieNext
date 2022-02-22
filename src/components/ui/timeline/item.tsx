import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { cssUnitByType } from '@utils'

type TimelineItemProps = {
  children?: ReactNode
  minHeight?: string | number
}

const StyledTimelineItem = styled.li<Partial<TimelineItemProps>>`
  list-style: none;
  display: flex;
  position: relative;
  ${({ minHeight = 70 }) => 'min-height: ' + cssUnitByType(minHeight)};
`

const _TimelineItem: FC<TimelineItemProps> = ({ children, ...props }) => (
  <StyledTimelineItem {...props}>{children}</StyledTimelineItem>
)

const TimelineItem = withStyles<TimelineItemProps & WithStylesProps>(
  _TimelineItem
)

export default TimelineItem
