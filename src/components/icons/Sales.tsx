import * as React from 'react'
import { SVGProps } from 'react'

const SvgSales = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 48 48'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M21 44.64H10.5'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M26.2 30.002c.264-.721.974-1.203 1.77-1.202h16.656a1.913 1.913 0 0 1 1.52.73c.352.456.449 1.048.258 1.586L41.6 44.64H21l5.2-14.638z'
      clipRule='evenodd'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M33.782 34.268c1.105 0 2 .86 2 1.92s-.895 1.92-2 1.92-2-.86-2-1.92.895-1.92 2-1.92M1.5 44.64c.002-4.12 1.5-9.448 7-11.14 6.5-2 11 0 14 3'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M15 28.8c4.556 0 8.25-3.546 8.25-7.92s-3.694-7.92-8.25-7.92-8.25 3.546-8.25 7.92S10.444 28.8 15 28.8z'
      clipRule='evenodd'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M38.25 4.32H33c-1.288-.004-2.397.872-2.642 2.086-.244 1.214.445 2.424 1.642 2.881l5.31 1.584c1.195.459 1.883 1.668 1.638 2.881-.244 1.213-1.35 2.09-2.638 2.088H30m4.5-11.52V1.44m0 17.28v-2.88'
    />
  </svg>
)

export default SvgSales
