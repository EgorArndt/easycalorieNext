import { FC, ReactNode } from 'react'

import { Line, LineProps } from '../helpers/line'
import { Titlebox, TitleboxProps } from '../helpers/titlebox'
import { Small } from '../helpers/small'
import { Box, BoxProps } from '@ui'

export type SectionProps = {
  smallText?: string
  texts?: TitleboxProps['children']
  children?: ReactNode
  title: string
} & LineProps &
  Omit<TitleboxProps, 'children'> &
  Omit<BoxProps, 'color'>

const HomeSection: FC<SectionProps> = ({
  smallText,
  circleContent,
  color,
  lineTitle,
  title,
  texts,
  children,
  style,
  ...props
}: SectionProps) => (
  <Box as='section' center style={{ position: 'relative' }} {...props}>
    <Box isAppContainer column>
      {smallText && <Small spacing={{ mb: 3 }}>{smallText}</Small>}
      <Line circleContent={circleContent} color={color} lineTitle={lineTitle} />
      <Titlebox title={title} size='l'>
        {texts}
      </Titlebox>
      {children}
    </Box>
  </Box>
)

export default HomeSection
