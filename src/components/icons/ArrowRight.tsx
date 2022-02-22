import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' fill='none' viewBox='0 0 6 10' {...props}>
    <path
      fill='currentColor'
      d='M1.243 5 5.455.643 4.833 0 0 5l4.833 5 .622-.682L1.243 5z'
    />
  </svg>
)

export default SvgArrowRight
