import * as React from 'react'
import { SVGProps } from 'react'

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='clock_svg__sc-bdnylx clock_svg__eoHNwX'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 4h1v5h5v1H6V4Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgClock
