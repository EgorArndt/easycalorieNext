import * as React from 'react'
import { SVGProps } from 'react'

const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.21 4.178c-.405-1.216.752-2.373 1.967-1.968l10.634 3.545c1.418.472 1.418 2.478 0 2.95l-3.841 1.28c-.465.156-.83.52-.984.985l-1.28 3.84c-.473 1.419-2.479 1.419-2.951 0L2.21 4.178Z'
      fill='transparent'
    />
    <path
      d='M15.167 4.687 4.533 1.142C2.437.444.443 2.437 1.143 4.533l3.544 10.634c.814 2.444 4.272 2.444 5.086 0l1.28-3.842a.43.43 0 0 1 .272-.271l3.842-1.28c2.444-.815 2.444-4.273 0-5.087Z'
      stroke='var(--geist-background)'
      strokeWidth={1.5}
    />
  </svg>
)

export default SvgAirplane
