import * as React from 'react'
import { SVGProps } from 'react'

const SvgCube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='cube_svg__sc-bdnylx cube_svg__eoHNwX'
    {...props}
  >
    <path
      d='M8.473 16a.591.591 0 0 0 .138-.066l5.402-3.28c.642-.39.987-.786.987-1.852V5.074c0-.221-.014-.398-.055-.56L8.473 8.457V16ZM1.055 4.515l6.472 3.94V16a.446.446 0 0 1-.13-.066l-5.41-3.28c-.635-.39-.987-.786-.987-1.852V5.074c0-.221.014-.398.055-.56ZM8.003 0c.388 0 .788.127 1.19.361l.06.036 4.87 2.956c.136.078.249.157.345.25l.035.037-6.5 3.934L1.497 3.64a1.73 1.73 0 0 1 .33-.254l.056-.033 3.562-2.17h.001L6.748.397c.38-.232.76-.369 1.134-.393l.062-.003.06-.001Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgCube
