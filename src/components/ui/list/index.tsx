import React, { FC, ReactNode, ReactElement, RefObject } from 'react'

import { Ul, UlProps } from './ul'
import { WithStylesProps } from '@hocs'

export type ListProps = {
  children: ReactElement | ReactElement[]
  header?: ReactNode
  componentRef?: RefObject<HTMLUListElement>
  [key: string]: unknown
} & UlProps &
  WithStylesProps

const List: FC<ListProps> = ({
  children,
  palette,
  componentRef,
  ...props
}: ListProps) => (
  <Ul palette={palette} ref={componentRef} {...props}>
    {/* Share palette if passed globally to Ul with LiItems */}
    {React.Children.map(children, (li: ReactElement, key) =>
      React.cloneElement(li, { ...li.props, palette, key })
    )}
  </Ul>
)

export default List
