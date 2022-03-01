import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type TimelineProps = {
  children?: ReactNode
  position?: 'alternate' | 'left' | 'right' | 'opposite'
  leftFirst?: boolean
  componentRef?: RefObject<HTMLUListElement>
}

const StyledTimeline = styled.ul<Partial<TimelineProps>>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${({ position }) =>
    position !== 'opposite' &&
    `
    & li::before {
      content: '';
      flex: 1;
      padding: 6px 16px;
    }
  `}

  ${({ position, leftFirst }) =>
    position &&
    (position === 'alternate'
      ? `
          & li:nth-of-type(${leftFirst ? 'odd' : 'even'}) {
              flex-direction: row-reverse;
              
              & > * {
                  text-align: right;
              }
          }
        `
      : position === 'opposite'
      ? `
          & li {
            & > *:nth-of-type(even) {
              text-align: left;
            }
            & > *:nth-of-type(odd) {
              text-align: right;
            }
          }
        `
      : position === 'left'
      ? `
          & li {
            flex-direction: row-reverse;
            & > * {
              text-align: right;
            }
          }
        `
      : '')}
`

const _Timeline: FC<TimelineProps> = ({
  children,
  componentRef,
  ...props
}: TimelineProps) => (
  <StyledTimeline ref={componentRef} {...props}>
    {children}
  </StyledTimeline>
)

const Timeline = withStyles<TimelineProps & WithStylesProps>(
  _Timeline,
  null,
  true
)

export default Timeline
