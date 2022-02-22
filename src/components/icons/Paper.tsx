import * as React from 'react'
import { SVGProps } from 'react'

const SvgPaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='paper_svg__sc-bdnylx paper_svg__eoHNwX'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 .786C2 .352 2.352 0 2.786 0h6.07v4.8H14V4H9.714V0L14 4v.8L14 15.214a.786.786 0 0 1-.786.786H2.786A.786.786 0 0 1 2 15.214V.786Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgPaper
