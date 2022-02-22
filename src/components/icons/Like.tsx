import * as React from 'react'
import { SVGProps } from 'react'

const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='like_svg__sc-bdnylx like_svg__eoHNwX'
    {...props}
  >
    <path
      d='M7.888 16c14.01-8.034 7.081-18.966 0-13.551C1.113-2.966-5.815 7.966 7.888 16Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgLike
