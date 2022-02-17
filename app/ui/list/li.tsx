import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '../../hocs/with_styles'

export type ListItemProps = {
  children: ReactNode | ReactNode[]
  value?: string 
  className?: string 
  [key: string]: unknown
}

const StyledListItem = styled.li<Partial<ListItemProps>>`
  display: flex;
  align-items: center;
  
  & > * {
    width: 100% !important;
    height: 100% !important;
    color: inherit !important;
  }

  & * {
    font-size: inherit !important;
  }
`

const _ListItem: FC<ListItemProps> = ({children, className, ...props}: ListItemProps) => (
  <StyledListItem className={className} {...props}>
    {children}
  </StyledListItem>
)

const ListItem = withStyles<ListItemProps & WithStylesProps>(_ListItem)

export default ListItem
