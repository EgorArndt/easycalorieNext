import React, { FC, ReactElement } from 'react'

import { List, ListItem, ListProps } from '@ui'

export const HamburgerMenu: FC<ListProps> = ({
  children,
  ...props
}: ListProps) => 
  <List 
    column 
    {...props}
  >
    {React.Children.map(children, (child: ReactElement, idx) => (
      <ListItem key={idx} borderBottom>
        {child}
      </ListItem>
    ))}
  </List>

