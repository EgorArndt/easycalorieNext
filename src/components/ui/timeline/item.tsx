import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'
import { cssUnitByType } from '@utils'

type TimelineItemProps = {
  children?: ReactNode
  minHeight?: string | number
  componentRef?: RefObject<HTMLLIElement>
}

const StyledTimelineItem = styled.li<Partial<TimelineItemProps>>`
  list-style: none;
  display: flex;
  position: relative;
  ${({ minHeight = 70 }) => 'min-height: ' + cssUnitByType(minHeight)};
`

const _TimelineItem: FC<TimelineItemProps> = ({
  children,
  componentRef,
  ...props
}) => (
  <StyledTimelineItem ref={componentRef} {...props}>
    {children}
  </StyledTimelineItem>
)

const TimelineItem = withStyles<TimelineItemProps & WithStylesProps>(
  _TimelineItem
)

export default TimelineItem
