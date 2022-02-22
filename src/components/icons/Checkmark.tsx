import * as React from 'react'
import { SVGProps } from 'react'

const SvgCheckmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='checkmark_svg__sc-bdnylx checkmark_svg__eoHNwX'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.497 10.322 13 4l1.394 1.434-7.897 7.678L1 7.767l1.394-1.434 4.103 3.99Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgCheckmark
