import { FC, ReactNode } from 'react'

import { Accordion, Box } from '@ui'
import { withStyles, WithStylesProps } from '@hocs'
import { useBreakpoints } from '@hooks'

type FooterColumnProps = {
  children?: ReactNode[]
  header?: ReactNode
  noCollapse?: boolean
}

export type EnhacedFooterColumnProps = FooterColumnProps & WithStylesProps

const _FooterColumn: FC<FooterColumnProps> = ({
  children,
  header,
  noCollapse,
  ...props
}: FooterColumnProps) => {
  const { isXs, isS } = useBreakpoints()
  const isDisabled = (!isS && !isXs) || noCollapse ? true : null

  return (
    <Accordion label={header} forceOpen={isDisabled} disabled={isDisabled}>
      <Box column {...props}>
        {children}
      </Box>
    </Accordion>
  )
}

const FooterColumn = withStyles<EnhacedFooterColumnProps>(
  _FooterColumn,
  null,
  true
)

export default FooterColumn
