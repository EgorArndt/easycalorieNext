import { FC, ReactNode } from 'react'

import { Footer, FooterColumn, GridGroup } from '@ui'
import { WithStylesProps } from '@hocs'

type AppFooterProps = {
  cols?: Array<{ header: ReactNode; items: ReactNode[] }>
  children?: ReactNode
} & WithStylesProps

export const AppFooter: FC<AppFooterProps> = ({
  cols,
  children,
  ...props
}: AppFooterProps) => (
  <Footer
    palette='secondary'
    borderTop
    fontSize='body1'
    spacing={{ mt: 3 }}
    gap='5rem'
    column
    center
    {...props}
  >
    {cols && (
      <GridGroup
        itemSize={{ min: 150, max: 300 }}
        width='100%'
        center
        gap='1rem'
      >
        {cols.map((col, idx) => (
          <FooterColumn header={col.header} gap='1rem' key={idx}>
            {col.items}
          </FooterColumn>
        ))}
      </GridGroup>
    )}
    {children && (
      <GridGroup
        itemSize={{ min: 100, max: 250 }}
        width='100%'
        center
        gap='1rem'
      >
        {children}
      </GridGroup>
    )}
  </Footer>
)
