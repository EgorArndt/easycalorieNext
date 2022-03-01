import * as React from 'react'
import { SVGProps } from 'react'

const SvgDocs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 44 44'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='var(--geist-background)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M25.667 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.667-3.666v-22l-11-11z'
    />
    <path
      stroke='var(--geist-background)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M25.667 3.667v11h11m-7.334 9.166H14.667m14.666 7.334H14.667M18.333 16.5h-3.666'
    />
  </svg>
)

export default SvgDocs
