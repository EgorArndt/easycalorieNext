import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { Box, BoxProps } from '@ui'

type TabpanelProps = {
  children: ReactNode | ReactNode[]
} & Partial<BoxProps>

const Tabpanel: FC<TabpanelProps> = ({
  children,
  className,
  ...props
}: TabpanelProps) => (
  <Box role='tabpanel' className={cn(className, 'tabpanel')} {...props}>
    {children}
  </Box>
)

export default Tabpanel
