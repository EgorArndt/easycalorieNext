import * as React from 'react'
import { SVGProps } from 'react'

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' fill='none' viewBox='0 0 10 10' {...props}>
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M2.5 0H0v2.5h2.5V0zm0 3.75H0v2.5h2.5v-2.5zM0 7.5h2.5V10H0V7.5zm10-3.75H3.75v2.5H10v-2.5zM3.75 7.5H10V10H3.75V7.5zM10 0H3.75v2.5H10V0z'
      clipRule='evenodd'
    />
  </svg>
)

export default SvgList
