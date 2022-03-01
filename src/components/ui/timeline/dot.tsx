import { FC, RefObject } from 'react'
import styled from '@emotion/styled'

import { withStyles, WithStylesProps } from '@hocs'

type DotProps = {
  componentRef?: RefObject<HTMLDivElement>
}

const StyledDot = styled.div`
  display: flex;
  align-self: baseline;
  border-style: solid;
  border-width: 2px;
  padding: 4px;
  border-radius: 50%;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-color: transparent;
`

const _Dot: FC<DotProps> = ({ componentRef, ...props }: DotProps) => (
  <StyledDot ref={componentRef} {...props} />
)

const Dot = withStyles<DotProps & WithStylesProps>(_Dot, null, true)

export default Dot
