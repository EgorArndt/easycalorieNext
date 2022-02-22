import * as React from 'react'
import { SVGProps } from 'react'

const SvgThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='threeDots_svg__sc-bdnylx threeDots_svg__eoHNwX'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.556 1.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0Zm0 6.222A1.778 1.778 0 1 1 6 8a1.778 1.778 0 0 1 3.556 0Zm-1.778 8a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgThreeDots
