import * as React from 'react'
import { SVGProps } from 'react'

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='bell_svg__sc-bdnylx bell_svg__eoHNwX'
    {...props}
  >
    <path
      d='M9.037 1.067c0 .035-.002.07-.005.105 2.368.492 4.15 2.646 4.15 5.228v2.133l2.169 3.718c.414.711-.084 1.616-.89 1.616H1.539c-.806 0-1.303-.905-.889-1.616l2.168-3.718V6.4c0-2.582 1.783-4.736 4.151-5.228a1.11 1.11 0 0 1-.005-.105C6.963.477 7.428 0 8 0c.572 0 1.037.478 1.037 1.067ZM8 16a2.063 2.063 0 0 1-1.796-1.067h3.592A2.063 2.063 0 0 1 8 16Z'
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
    />
  </svg>
)

export default SvgBell
