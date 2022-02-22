import * as React from 'react'
import { SVGProps } from 'react'

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' fill='none' {...props}>
    <path
      d='M8.672.868 7.95.14 4.702 3.413 1.454.14.733.868 3.98 4.14.733 7.413l.721.727 3.248-3.272L7.95 8.14l.722-.727L5.424 4.14 8.672.868z'
      fill='#fff'
    />
  </svg>
)

export default SvgCross
