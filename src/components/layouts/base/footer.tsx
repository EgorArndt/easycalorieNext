import { FC, ReactNode } from 'react'

import { Footer, FooterColumn, GridGroup } from '@ui'
import { WithStylesProps } from '@hocs'

type FooterBase = {
  cols?: Array<{ header: ReactNode; items: ReactNode[] }>
  children?: ReactNode
} & WithStylesProps

const FooterBase: FC<FooterBase> = ({
  cols,
  children,
  style,
  ...props
}: FooterBase) => (
  <Footer
    palette='secondary'
    borderTop
    fontSize='body1'
    gap='5rem'
    column
    center
    style={{...style, marginTop: 'auto'}}
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

export default FooterBase
