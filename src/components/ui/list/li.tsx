import { FC, ReactNode, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

export type ListItemProps = {
  children: ReactNode | ReactNode[]
  value?: string
  className?: string
  componentRef?: RefObject<HTMLLIElement>
  [key: string]: unknown
}

export type EnhancedListItemProps = ListItemProps & WithStylesProps

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

const _ListItem: FC<ListItemProps> = ({
  children,
  className,
  componentRef,
  ...props
}: ListItemProps) => (
  <StyledListItem className={className} ref={componentRef} {...props}>
    {children}
  </StyledListItem>
)

const ListItem = withStyles<EnhancedListItemProps>(_ListItem)

export default ListItem
