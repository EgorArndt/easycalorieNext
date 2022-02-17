import React, { FC, ReactNode, ReactElement } from 'react'

import { Children } from '../models'
import { Ul, UlProps } from './ul'
import { ListItemProps } from './li'
import { WithStylesProps } from '../../hocs/with_styles'

export type ListProps = {
  children: Children<ListItemProps>
  header?: ReactNode
  [key: string]: unknown
} & UlProps & WithStylesProps

const List: FC<ListProps> = ({ children, palette, ...props }: ListProps) => (
  <Ul {...props}>
    {React.Children.map(children, 
    // Share palette if passed globally to Ul with LiItems
      (li: ReactElement, key) => 
        React.cloneElement(
          li, 
          {...li.props, palette, key}
        )
    )}
  </Ul>
)

export default List