import * as React from 'react'
import { SVGProps } from 'react'

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    className='eye_svg__sc-bdnylx eye_svg__eoHNwX'
    style={{
      marginRight: 4,
      minWidth: 14,
    }}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 7.6c0 1.6-4.907 5.6-8 5.6S0 8.8 0 7.6C0 6 4.907 2 8 2s8 4 8 5.6Zm-4.8 0a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0ZM8 9.2A1.6 1.6 0 1 0 8 6a1.6 1.6 0 0 0 0 3.2Z'
      fill='currentColor'
    />
  </svg>
)

export default SvgEye
